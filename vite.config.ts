import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    dirStyle: 'nested',
    entry: 'src/main.ssg.tsx',
  },

  build: {
    // 暂时移除 rollupOptions，确保 SSG 构建成功
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1000
  },

  server: {
    port: 3000,
    open: true
  }
})