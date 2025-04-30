import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // or '0.0.0.0' to expose on all interfaces
    port: 5173,
    strictPort: true    // fail if port is already in use
  }
})
