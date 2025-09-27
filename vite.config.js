// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/medula-react/',   // <- NECESARIO para GitHub Pages en repo medula-react
})
