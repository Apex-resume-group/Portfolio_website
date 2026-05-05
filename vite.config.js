import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "../components/ui": path.resolve(__dirname, "./Components/UI"),
      "../components/home": path.resolve(__dirname, "./Components/Home"),
      "../components/layout": path.resolve(__dirname, "./Components/Layout"),
      "../components/reviews": path.resolve(__dirname, "./Components/Reviews"),
      "../components/services": path.resolve(__dirname, "./Components/Services"),
      "../components/shared": path.resolve(__dirname, "./Components/Shared"),
      "../components/templates": path.resolve(__dirname, "./Components/Templates"),
      "./Components/Layout/SiteLayout": path.resolve(__dirname, "./Components/Layout/SiteLayout"),
      "./components/layout": path.resolve(__dirname, "./Components/Layout"),
    },
  },
})