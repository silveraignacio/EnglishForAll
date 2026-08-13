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
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'state': ['zustand'],
        },
      },
    },
  },
})