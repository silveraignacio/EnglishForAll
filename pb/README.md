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

Con PocketBase corriendo, en otra terminal:

```bash
node pb/setup.mjs
```

Este script crea las colecciones necesarias (users, progress) si no existen y configura las reglas de acceso.

### 4. Configurar la app

La app ya apunta por defecto a `http://127.0.0.1:8090`. Si usas otro puerto, configura la variable de entorno:

```bash
VITE_POCKETBASE_URL=http://localhost:8090 npm run dev
```

## Colecciones

| Colección | Tipo | Campos | Uso |
|-----------|------|--------|-----|
| `users` | Auth (email/password) | nombre | Registro y login |
| `progress` | Base | `user` (relation→users), `data` (json) | Progreso del curso por usuario |

## Reglas de acceso

- `users`: los usuarios solo pueden crear/ver/actualizar su propio perfil.
- `progress`: cada usuario solo puede leer/escribir su propia fila (se verifica con la regla de lista `@request.auth.id = user.id`).

## Notas

- El archivo de base de datos (`pb_data/`) se crea automáticamente y no debe subirse a git (está en `.gitignore`).
- Para producción, despliega PocketBase en un servidor y apunta la app a la URL pública con `VITE_POCKETBASE_URL`.
- El JWT se guarda en `localStorage` y se envía en el header `Authorization` de cada petición (lo gestiona el SDK).