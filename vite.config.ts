import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

// Set SINGLE_FILE=1 to inline everything into one HTML file (used for the hosted preview).
export default defineConfig({
  plugins: [react(), ...(process.env.SINGLE_FILE ? [viteSingleFile()] : [])],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
