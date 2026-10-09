import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { existsSync } from "fs";
import path from "path";

const registry = path.resolve(__dirname, "../registry");

// Mirrors the paths in tsconfig.json. A plain alias cannot express the fallback from
// registry/ui to registry/blocks, so this resolves the two prefixes by hand.
function registryPaths(): PluginOption {
  const roots: Array<[string, string[]]> = [
    ["@/components/ui/", [path.join(registry, "ui"), path.join(registry, "blocks")]],
    ["@/lib/", [path.join(registry, "lib")]],
  ];

  return {
    name: "registry-paths",
    enforce: "pre",
    resolveId(source) {
      for (const [prefix, dirs] of roots) {
        if (!source.startsWith(prefix)) continue;
        const rest = source.slice(prefix.length);
        for (const dir of dirs) {
          for (const ext of [".tsx", ".ts"]) {
            const file = path.join(dir, rest + ext);
            if (existsSync(file)) return file;
          }
        }
      }
      return null;
    },
  };
}

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
