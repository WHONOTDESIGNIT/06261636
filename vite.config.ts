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

  // vite-ssg options
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    dirStyle: 'nested',
    entry: 'src/main.ssg.tsx',
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 移除可能被标记为外部的模块
          // seo: ['react-helmet-async'], // 删除这行
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    },
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