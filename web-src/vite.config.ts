import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://albeasystems.github.io/snowballFi/ (GitHub Pages project site).
export default defineConfig({
  base: '/snowballFi/',
  plugins: [react(), tailwindcss()],
  build: { assetsInlineLimit: 0 },
})
