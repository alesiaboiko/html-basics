import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // shadcn components import from "@/lib/utils". jsconfig.json declares the
    // same alias for editors; this is the one the bundler actually uses.
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
