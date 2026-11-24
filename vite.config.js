import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// VITE_BASE controls the public path the site is served from.
//   "/"                              -> site served from a domain root (default)
//   "/novacatalystcollective/dist/"  -> local XAMPP preview (npm run build:xampp)
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASE || '/',
    plugins: [react(), tailwindcss()],
  }
})
