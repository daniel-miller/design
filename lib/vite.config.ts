import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from "path";
import { readFileSync } from "fs";
import { registryPaths } from "../registry-paths";

const pkg = JSON.parse(readFileSync(path.resolve(__dirname, "package.json"), "utf-8")) as {
  dependencies: Record<string, string>;
  peerDependencies: Record<string, string>;
};

// Every dependency stays an import in dist/: the converter bundles them itself, and React must be
// the one copy it supplies. Stylesheets are the exception: a dependency's CSS (react-day-picker's)
// is compiled into dist/styles.css, the one stylesheet a design receives.
const external = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)];

export default defineConfig({
  plugins: [
    registryPaths(),
    react(),
    tailwindcss(),
    // One rolled-up index.d.ts, so no declaration file is left importing an @/ path the
    // converter cannot follow.
    dts({ tsconfigPath: "./tsconfig.json", entryRoot: "..", rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      formats: ["es"],
      fileName: "index",
      cssFileName: "styles",
    },
    rollupOptions: {
      external: (id) =>
        (!id.endsWith(".css") &&
          external.some((name) => id === name || id.startsWith(name + "/"))) ||
        id === "react/jsx-runtime",
    },
  },
});
