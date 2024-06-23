import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
    "@": "/src",
    components: "/src/components",
    utils: "/src/utils",
  },
});
