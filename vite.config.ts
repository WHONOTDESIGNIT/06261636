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
  build: {
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          // 将React相关库分离
          vendor: ['react', 'react-dom'],
          // 路由相关
          router: ['react-router-dom'],
          // SEO相关
          seo: ['react-helmet-async'],
          // 动画库单独分离（如果保留framer-motion）
          animations: ['framer-motion'],
          // 图标库
          icons: ['lucide-react']
        }
      }
    },
    // 启用压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true
      }
    },
    // 设置chunk大小警告阈值
    chunkSizeWarningLimit: 1000
  },
  // 开发服务器配置
  server: {
    port: 3000,
    open: true
  }
})