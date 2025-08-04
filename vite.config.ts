import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
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
    // The entry point for SSG.
    entry: 'src/main.ssg.tsx',
  },

  build: {
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Routing related
          router: ['react-router-dom'],
          // SEO related
          seo: ['react-helmet-async'],
          // Separate animation library (if framer-motion is kept)
          animations: ['framer-motion'],
          // Icon library
          icons: ['lucide-react']
        }
      }
    },
    // Enable compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console in production
        drop_debugger: true
      }
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true
  }
})