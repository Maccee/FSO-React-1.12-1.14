import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FSO-React-1.12-1.14",
  plugins: [react()],
})
