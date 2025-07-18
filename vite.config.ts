import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: false,
        svgo: true,
      },
    }),
  ],
  base: "/",
});
