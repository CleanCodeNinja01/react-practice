import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 3000,
    proxy: {
      // Browser calls stay on localhost; Vite forwards them to Coursera.
      // The catalog API omits Access-Control-Allow-Origin on JSON responses.
      "/coursera-api": {
        target: "https://api.coursera.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/coursera-api/, ""),
      },
    },
  },
})
