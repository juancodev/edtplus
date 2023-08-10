import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': "../../assets",
      '@components': "./src/components"
    }
  },
  plugins: [react()],
})
