import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// No need to import '@tailwindcss/vite', just install and configure tailwindcss.
import tailwindcss from 'tailwindcss' // This is just to highlight it's in use.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Base path for GitHub Pages
})
