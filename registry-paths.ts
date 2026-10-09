import { existsSync } from "fs";
import path from "path";
import type { PluginOption } from "vite";

const registry = path.resolve(__dirname, "registry");

// Resolves the import paths the registry sources use, the same ones an app sees once the CLI has
// copied them in. A plain alias cannot express the fallback from registry/ui to registry/blocks,
// so this resolves the two prefixes by hand. Shared by the specimen and the library build, and
// mirrored by the paths in each tsconfig.json.
export function registryPaths(): PluginOption {
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
