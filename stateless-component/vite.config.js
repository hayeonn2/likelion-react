import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { resolve } from "node:path"; 사용 안해도 될거같아

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "./src" }], // src 절대경로 사용 가능!
  },
  server: {
    host: "localhost",
    port: 3000,
  },
});
