import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PeaceOut/',
  root: 'apps/web',
  plugins: [react()],
})