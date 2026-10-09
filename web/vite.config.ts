import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { registryPaths } from "../registry-paths";

const registry = path.resolve(__dirname, "../registry");

export default defineConfig({
  plugins: [registryPaths(), react(), tailwindcss()],
  server: {
    port: 5180,
    // The registry, tokens, and palettes sit above web/, and the dev server refuses to read
    // outside its root without being told. Named exactly rather than allowing the repo root.
    fs: {
      allow: [
        path.resolve(__dirname),
        registry,
        path.resolve(__dirname, "../tokens"),
        path.resolve(__dirname, "../palettes"),
        path.resolve(__dirname, "../node_modules"),
      ],
    },
  },
});
