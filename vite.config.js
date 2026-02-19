import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    allowedHosts: [
      'landless-serpentinely-amari.ngrok-free.dev' // Добавьте ваш адрес сюда
    ]
  }
})
