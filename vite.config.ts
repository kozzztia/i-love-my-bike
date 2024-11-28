import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Это позволяет подключаться с другого устройства в сети
    port: 3000,      // Можно задать нужный порт
  },
})
