#!/usr/bin/env node
// pb/setup.mjs — Creates the PocketBase collections needed by English On Course.
// Run AFTER PocketBase is serving (./pocketbase serve).
//
// Requires admin credentials via env vars: PB_ADMIN_EMAIL + PB_ADMIN_PASSWORD.
// POCKETBASE_URL overrides the default http://127.0.0.1:8090.

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
        `   Asegúrate de que PocketBase esté corriendo.\n` +
        `   Crea el admin la primera vez: ./pocketbase superuser upsert tu@email.com "contraseña"\n\n` +
        `   Detalle: ${e.message}`
    )
    process.exit(1)
  }
}

async function ensureUsersCollection(token) {
  // PocketBase creates the auth collection "users" by default. Ensure it has the
  // extra "nombre" (display name) text field used by the app.
  let users
  try {
    users = await request('/api/collections/users', { token })
  } catch {
    await request('/api/collections', {
      method: 'POST',
      token,
      body: {
        name: 'users',
        type: 'auth',
        fields: [
          { name: 'nombre', type: 'text' },
          { name: 'email', type: 'email', required: true },
          { name: 'password', type: 'password', required: true },
        ],
        listRule: '@request.auth.id != ""',
        viewRule: '@request.auth.id != ""',
        createRule: '',
        updateRule: 'id = @request.auth.id',
        deleteRule: 'id = @request.auth.id',
      },
    })
    users = await request('/api/collections/users', { token })
    console.log('  ✓ Colección "users" creada')
  }

  // Add "nombre" field if missing
  const hasNombre = (users.fields || []).some((f) => f.name === 'nombre')
  if (!hasNombre) {
    const fields = [...(users.fields || []), { name: 'nombre', type: 'text' }]
    const updated = await request('/api/collections/users', {
      method: 'PATCH',
      token,
      body: { fields },
    })
    users = updated
    console.log('  ✓ Campo "nombre" añadido a users')
  }
  return users.id
}

async function ensureProgressCollection(token, usersCollectionId) {
  // Check if it exists (and whether it matches the expected schema)
  let existing = null
  try {
    existing = await request('/api/collections/progress', { token })
  } catch {
    existing = null
  }
  if (existing) {
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
        // relation field defined at field level (PocketBase >= 0.23 API format)
        {
          name: 'user',
          type: 'relation',
          required: true,
          collectionId: usersCollectionId,
          maxSelect: 1,
          cascadeDelete: true,
        },
        { name: 'completedLessons', type: 'json' },
        { name: 'examResults', type: 'json' },
        { name: 'exerciseResults', type: 'json' },
        { name: 'lastActivityDate', type: 'date' },
        { name: 'streak', type: 'number' },
      ],
      indexes: ['CREATE UNIQUE INDEX idx_progress_user ON progress (user)'],
      listRule: 'user = @request.auth.id',
      viewRule: 'user = @request.auth.id',
      createRule: 'user = @request.auth.id',
      updateRule: 'user = @request.auth.id',
      deleteRule: 'user = @request.auth.id',
    },
  })
  console.log('  ✓ Colección "progress" creada')
}

async function main() {
  console.log(`\n=== PocketBase setup → ${PB_URL} ===\n`)
  const token = await getAdminToken()
  const usersCollectionId = await ensureUsersCollection(token)
  await ensureProgressCollection(token, usersCollectionId)
  console.log('\n✓ Setup completado. La app ya puede usar registro/login y sincronización de progreso.\n')
}

main().catch((e) => {
  console.error('\n❌ Error:', e.message)
  process.exit(1)
})