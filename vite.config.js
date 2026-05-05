import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
"../components/ui": path.resolve(__dirname, "./components/ui"),
"../components/home": path.resolve(__dirname, "./components/home"),
"../components/layout": path.resolve(__dirname, "./components/layout"),
"../components/reviews": path.resolve(__dirname, "./components/reviews"),
"../components/services": path.resolve(__dirname, "./components/services"),
"../components/shared": path.resolve(__dirname, "./components/shared"),
"../components/templates": path.resolve(__dirname, "./components/templates"),
"./Components/Layout/SiteLayout": path.resolve(__dirname, "./components/layout/Sitelayout"),
"./components/layout": path.resolve(__dirname, "./components/layout"),
    },
  },
})