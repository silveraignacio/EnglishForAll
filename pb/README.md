# PocketBase — Backend de English On Course

PocketBase es un backend self-hosted con base SQLite, autenticación (email/password con JWT) y API REST integrados. No requiere ningún servicio externo.

## Requisitos

- Node.js 18+ (para el script de setup)
- El binario de PocketBase (una sola descarga, ver abajo)

## Instalación

### 1. Descargar PocketBase

PocketBase es **un único binario** (sin dependencias). Descárgalo para tu sistema desde:

https://pocketbase.io/docs/

O directamente (ejemplo para Linux x64):

```bash
# En la carpeta pb/
curl -L https://github.com/pocketbase/pocketbase/releases/latest/download/pocketbase_linux_amd64.zip -o pb.zip
unzip pb.zip
rm pb.zip
chmod +x pocketbase
```

### 2. Iniciar PocketBase

```bash
# Desde la raíz del proyecto
./pb/pocketbase serve
```

Esto arranca el servidor en `http://127.0.0.1:8090` (admin UI en `/_/`).

### 3. Aplicar el schema

Con PocketBase corriendo, en otra terminal. **Primera vez:** crea el admin en la UI (`http://127.0.0.1:8090/_/`), luego:

```bash
PB_ADMIN_EMAIL=tu@email.com PB_ADMIN_PASSWORD=tu_password node pb/setup.mjs
```

> Las credenciales de admin se leen de las variables de entorno `PB_ADMIN_EMAIL` y `PB_ADMIN_PASSWORD`. Sin ellas, el script aborta con un error claro — no hay contraseñas por defecto.

Este script crea las colecciones necesarias (users, progress) si no existen y configura las reglas de acceso. Es seguro reejecutarlo (no duplica colecciones).

### 4. Configurar la app

La app ya apunta por defecto a `http://127.0.0.1:8090`. Si usas otro puerto, configura la variable de entorno:

```bash
VITE_POCKETBASE_URL=http://localhost:8090 npm run dev
```

## Colecciones

| Colección | Tipo | Campos | Uso |
|-----------|------|--------|-----|
| `users` | Auth (email/password) | nombre | Registro y login |
| `progress` | Base | `user` (relation→users), `completedLessons` (json array), `examResults` (json array), `exerciseResults` (json array), `lastActivityDate` (text), `streak` (number), `placementResult` (json) | Progreso del curso por usuario |

> **Nota:** son columnas planas, no un solo campo `data` json — `src/lib/progressSync.ts` mapea `UserProgress` a esas columnas explícitamente. **`xp`, `completedModules`, `achievements` y `weakConcepts` NO se sincronizan al servidor** — viven solo en el store local del navegador (persist de zustand) y se recalculan/pierden en cada sync desde el servidor. Si se quiere que sobrevivan entre dispositivos, hay que agregarlos como columnas y mapearlos en `progressSync.ts`.

## Reglas de acceso

- `users`: los usuarios solo pueden crear/ver/actualizar su propio perfil.
- `progress`: cada usuario solo puede leer/escribir su propia fila (se verifica con la regla de lista `@request.auth.id = user.id`).

## Notas

- El archivo de base de datos (`pb_data/`) se crea automáticamente y no debe subirse a git (está en `.gitignore`).
- Para producción, despliega PocketBase en un servidor y apunta la app a la URL pública con `VITE_POCKETBASE_URL`.
- El JWT se guarda en `localStorage` y se envía en el header `Authorization` de cada petición (lo gestiona el SDK).

## Despliegue en un servidor (nginx + systemd)

Ejemplo real desplegado en `englishforall.silversolutions.dpdns.org`:

1. **PocketBase** como servicio systemd escuchando SOLO en localhost (nunca expuesto al exterior):
   ```
   # /etc/systemd/system/<app>-pocketbase.service
   ExecStart=/opt/<app>/pocketbase/pocketbase serve --http=127.0.0.1:8092
   ```
   - Elige un puerto libre (el 8091 ya lo usa otra app en el mismo servidor).
2. **Schema**: crea `pb_migrations/1_progress.js` siguiendo el patrón de migración JSVM de PocketBase (así se aplica al arrancar), o usa `pb/setup.mjs` con `POCKETBASE_URL` y las credenciales admin.
3. **Nginx**: sirve el frontend estático (`dist/`) y hace proxy de `/api/` y `/_/` al PocketBase local:
   ```
   location = /admin { return 301 https://$host/admin/; }
   location /api/    { proxy_pass http://127.0.0.1:8092; ... }
   location /_/      { proxy_pass http://127.0.0.1:8092; ... }
   location /admin/  { try_files $uri $uri/index.html =404; }
   location /        { try_files $uri /index.html; }
   ```
   El bloque `/admin/` es necesario porque `public/admin/index.html` (panel de alumnos, ver más abajo) es un
   archivo estático fuera del bundle de React — sin ese bloque, `try_files $uri /index.html;` del SPA capta
   `/admin/` (URI con barra final, sin nombre de archivo) antes de que nginx resuelva el índice del directorio,
   y sirve el `index.html` de la app en vez del panel. El bloque `location = /admin` (sin barra) es igual de
   necesario: sin él, `/admin` (como escribe la gente a mano, sin la barra) no matchea `location /admin/` y
   también cae en el catch-all del SPA — hace un 301 a `/admin/` con esquema forzado a https (si no, el bloque
   del puerto 80 genera un Location `http://`, y algunos clientes no reenvían las credenciales al saltar de
   http a https).
4. **Build del frontend** apuntando a la URL pública:
   ```
   VITE_POCKETBASE_URL=https://tu-dominio.com npm run build
   ```
   (El frontend habla con `/api` a través de nginx, nunca directo a PocketBase.)
5. **TLS**: `certbot --nginx -d tu-dominio.com`.
6. **Seguridad**: PocketBase solo escucha en `127.0.0.1`; el firewall no necesita abrir ningún puerto extra más allá de 80/443. Todo entra por nginx.

## Panel de alumnos (`public/admin/index.html`)

Página estática independiente del bundle de React, en `https://tu-dominio.com/admin/`. Se loguea con las
credenciales de superadmin de PocketBase (mismas que `/_/`) y lee en vivo, vía `fetch` a `/api/collections/...`
del mismo origen (sin CORS), las colecciones `progress` y `users` para mostrar: alumnos registrados, activos
en los últimos 7 días, ejercicios respondidos/racha promedio, exámenes aprobados, distribución por nivel
recomendado, % de completitud promedio por nivel, y los conceptos donde más alumnos tienen dificultad (derivado
de `exerciseResults` en el navegador — `weakConcepts` no existe como columna server-side, ver nota de arriba).
El token de sesión se guarda solo en `sessionStorage` (se pierde al cerrar la pestaña).

`LEVEL_LESSON_TOTALS` dentro del archivo está hardcodeado (a1: 73, a2: 50, b1: 49, b2: 45) — actualizarlo a mano
cuando se agreguen lecciones, porque la página no importa el contenido del curso (es un archivo estático suelto,
no parte del build de Vite).

**Protección:** solo el login de superadmin de PocketBase (mismo que `/_/`) — se evaluó agregar HTTP Basic Auth
de nginx como capa extra, pero se descartó por redundante ya que el login interno ya exige esas credenciales.