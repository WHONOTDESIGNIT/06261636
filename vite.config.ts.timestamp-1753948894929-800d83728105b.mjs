// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          // 将React相关库分离
          vendor: ["react", "react-dom"],
          // 路由相关
          router: ["react-router-dom"],
          // SEO相关
          seo: ["react-helmet-async"],
          // 动画库单独分离（如果保留framer-motion）
          animations: ["framer-motion"],
          // 图标库
          icons: ["lucide-react"]
        }
      }
    },
    // 启用压缩
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        // 生产环境移除console
        drop_debugger: true
      }
    },
    // 设置chunk大小警告阈值
    chunkSizeWarningLimit: 1e3
  },
  // 开发服务器配置
  server: {
    port: 3e3,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBcdTRFRTNcdTc4MDFcdTUyMDZcdTUyNzJcdTRGMThcdTUzMTZcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgLy8gXHU1QzA2UmVhY3RcdTc2RjhcdTUxNzNcdTVFOTNcdTUyMDZcdTc5QkJcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgLy8gXHU4REVGXHU3NTMxXHU3NkY4XHU1MTczXG4gICAgICAgICAgcm91dGVyOiBbJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAvLyBTRU9cdTc2RjhcdTUxNzNcbiAgICAgICAgICBzZW86IFsncmVhY3QtaGVsbWV0LWFzeW5jJ10sXG4gICAgICAgICAgLy8gXHU1MkE4XHU3NTNCXHU1RTkzXHU1MzU1XHU3MkVDXHU1MjA2XHU3OUJCXHVGRjA4XHU1OTgyXHU2NzlDXHU0RkREXHU3NTU5ZnJhbWVyLW1vdGlvblx1RkYwOVxuICAgICAgICAgIGFuaW1hdGlvbnM6IFsnZnJhbWVyLW1vdGlvbiddLFxuICAgICAgICAgIC8vIFx1NTZGRVx1NjgwN1x1NUU5M1xuICAgICAgICAgIGljb25zOiBbJ2x1Y2lkZS1yZWFjdCddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIFx1NTQyRlx1NzUyOFx1NTM4Qlx1N0YyOVxuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLCAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTc5RkJcdTk2NjRjb25zb2xlXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIFx1OEJCRVx1N0Y2RWNodW5rXHU1OTI3XHU1QzBGXHU4QjY2XHU1NDRBXHU5NjA4XHU1MDNDXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwXG4gIH0sXG4gIC8vIFx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1OTE0RFx1N0Y2RVxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIG9wZW46IHRydWVcbiAgfVxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUE7QUFBQSxVQUU3QixRQUFRLENBQUMsa0JBQWtCO0FBQUE7QUFBQSxVQUUzQixLQUFLLENBQUMsb0JBQW9CO0FBQUE7QUFBQSxVQUUxQixZQUFZLENBQUMsZUFBZTtBQUFBO0FBQUEsVUFFNUIsT0FBTyxDQUFDLGNBQWM7QUFBQSxRQUN4QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSx1QkFBdUI7QUFBQSxFQUN6QjtBQUFBO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
