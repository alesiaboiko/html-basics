import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "./src") },
  },
  // Honour PORT when the environment assigns one; otherwise Vite's default (5173).
  server: { port: process.env.PORT ? Number(process.env.PORT) : undefined },
});
