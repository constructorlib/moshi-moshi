import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"


// https://vitejs.dev/config/

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0"
  },
  plugins: [react({
    include: "**/*.{jsx,tsx,js}",
    babel:{
      plugins: ["babel-plugin-styled-components"]
    }
  })],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "./src")
    }
  }
})
