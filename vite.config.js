import { defineConfig } from 'vite'

export default defineConfig({
  base: '/calculadora-IMC/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
