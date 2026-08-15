import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fully portable build: relative asset paths (base: './') so the app works in
// any subdirectory — GitHub Pages (/EnglishForAll/), Netlify, Vercel, a file
// server, or a local folder — without per-host config.
// HashRouter (in main.tsx) handles client-side routing on any static host.
const base = process.env.BASE_PATH || './'

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    // Ignore PocketBase internals so Vite doesn't watch/reload on every
    // log/db write the backend produces (pb_data, pb_logs, etc.)
    watch: {
      ignored: [
        '**/pb/**',
        '**/pb_data/**',
        '**/pb_logs/**',
        '**/node_modules/**',
        '**/dist/**',
      ],
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Course content (~4MB of source) is still all imported eagerly by
        // content/index.ts (getCourse()/getLevel() are synchronous APIs used
        // across every page), so this doesn't reduce what's downloaded on
        // first load — but splitting it per level means editing one level's
        // content only busts that level's chunk hash, so returning visitors
        // keep the other levels cached instead of re-downloading everything.
        // True lazy-per-level loading would need getCourse() to become async
        // and every page that calls it to handle a loading state — a bigger
        // change, left for later.
        manualChunks(id) {
          // Only pull out the vendor groups we know are safe to isolate.
          // Lumping arbitrary other node_modules into a catch-all "vendor"
          // chunk broke React's load order (a chunk called a hook before
          // react-vendor had finished initializing) — let Rollup's default
          // dependency-graph-aware splitting handle everything else.
          if (id.includes('node_modules')) {
            if (/[\\/]node_modules[\\/](react|react-dom|react-router-dom|scheduler)[\\/]/.test(id)) return 'react-vendor'
            if (id.includes('node_modules/zustand')) return 'state'
            if (id.includes('node_modules/pocketbase')) return 'pocketbase-vendor'
            return
          }
          const contentMatch = id.match(/\/src\/content\/(a1|a2|b1|b2|c1|c2)\//)
          if (contentMatch) return `content-${contentMatch[1]}`
        },
      },
    },
  },
})