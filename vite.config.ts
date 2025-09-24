import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 默认值为 '/'，适用于大多数情况
  build: {
    outDir: './dist',
  },
  css: {
    modules: {},
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 可以在这里添加全局Less变量
        // additionalData: `@import "@/styles/variables.less";`
      },
    },
  },
  server: {
    host: "127.0.0.1",
    port: 8000,
  },
});
