#!/usr/bin/env node
// pb/setup.mjs — Creates the PocketBase collections needed by English On Course.
// Run AFTER PocketBase is serving on http://127.0.0.1:8090 (./pb/pocketbase serve)
//
// Requires the PocketBase Admin API. Create an admin first via the admin UI at /_/
// or set PB_ADMIN_EMAIL + PB_ADMIN_PASSWORD env vars.

const PB_URL = process.env.POCKETBASE_URL || 'http://127.0.0.1:8090'
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL
const ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error(
    '❌ Falta configuración de admin de PocketBase.\n\n' +
      '   Define PB_ADMIN_EMAIL y PB_ADMIN_PASSWORD:\n\n' +
      '   PB_ADMIN_EMAIL=tu@email.com PB_ADMIN_PASSWORD=tu_password node pb/setup.mjs\n\n' +
      '   (Crea el admin la primera vez en la UI de PocketBase: http://127.0.0.1:8090/_/)'
  )
  process.exit(1)
}

async function request(path, { method = 'GET', body, token } = {}) {
  const res = await fetch(`${PB_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: token } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    const err = new Error(`PB ${method} ${path} → ${res.status}: ${JSON.stringify(json)}`)
    err.status = res.status
    err.body = json
    throw err
  }
  return json
}

async function getAdminToken() {
  try {
    const res = await request('/api/collections/_superusers/auth-with-password', {
      method: 'POST',
      body: { identity: ADMIN_EMAIL, password: ADMIN_PASSWORD },
    })
    return res.token
  } catch (e) {
    console.error(
      `\n❌ No se pudo autenticar como admin en ${PB_URL}.\n` +
        `   Asegúrate de que PocketBase esté corriendo (./pb/pocketbase serve).\n` +
        `   La primera vez crea un admin en la UI: http://127.0.0.1:8090/_/\n` +
        `   O define PB_ADMIN_EMAIL y PB_ADMIN_PASSWORD.\n\n` +
        `   Detalle: ${e.message}`
    )
    process.exit(1)
  }
}

async function collectionExists(token, name) {
  try {
    await request(`/api/collections/${name}`, { token })
    return true
  } catch {
    return false
  }
}

async function createUsersCollection(token) {
  // PocketBase creates the default _users collection; ensure custom "nombre" field.
  // We'll use the built-in auth collection "users" and add a "nombre" text field.
  try {
    await request('/api/collections/users', { token })
  } catch {
    // Create a custom auth collection named "users"
    await request('/api/collections', {
      method: 'POST',
      token,
      body: {
        name: 'users',
        type: 'auth',
        fields: [
          { name: 'nombre', type: 'text', required: true },
          { name: 'email', type: 'email', required: true },
          { name: 'password', type: 'password', required: true },
          { name: 'passwordConfirm', type: 'text', required: false },
        ],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: '',
        updateRule: 'id = @request.auth.id',
        deleteRule: 'id = @request.auth.id',
      },
    })
    console.log('  ✓ Colección "users" creada')
  }
}

async function createProgressCollection(token) {
  const exists = await collectionExists(token, 'progress')
  if (exists) {
    console.log('  • Colección "progress" ya existe')
    return
  }
  await request('/api/collections', {
    method: 'POST',
    token,
    body: {
      name: 'progress',
      type: 'base',
      fields: [
        { name: 'user', type: 'relation', options: { collectionId: 'users', cascadeDelete: true } },
        { name: 'data', type: 'json', required: true },
      ],
      listRule: 'user.id = @request.auth.id',
      viewRule: 'user.id = @request.auth.id',
      createRule: 'user.id = @request.auth.id',
      updateRule: 'user.id = @request.auth.id',
      deleteRule: '',
    },
  })
  console.log('  ✓ Colección "progress" creada')
}

async function main() {
  console.log(`\n=== PocketBase setup → ${PB_URL} ===\n`)
  const token = await getAdminToken()
  await createUsersCollection(token)
  await createProgressCollection(token)
  console.log('\n✓ Setup completado. La app ya puede usar registro/login y sincronización de progreso.\n')
}

main().catch((e) => {
  console.error('\n❌ Error:', e.message)
  process.exit(1)
})