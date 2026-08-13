import PocketBase from 'pocketbase'

// PocketBase instance. URL configurable via VITE_POCKETBASE_URL (default localhost:8090).
// The SDK automatically persists the auth token in localStorage and sends it
// as the Authorization header on every request.
export const pbUrl = import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090'
export const pb = new PocketBase(pbUrl)

// Optional: disable auto-refresh warnings noise during dev
pb.autoCancellation(false)

export default pb