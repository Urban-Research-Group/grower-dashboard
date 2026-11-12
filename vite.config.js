import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(ROOT_DIR, "public");
const MANIFEST_ID = "virtual:data-manifest";
const RESOLVED_MANIFEST_ID = "\0" + MANIFEST_ID;

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => fs.statSync(path.join(dir, name)).isDirectory())
    .sort();
}

// Scans public/states and public/historical so new states / months show up
// on the next build without editing any code.
function buildDataManifest() {
  const states = listDirs(path.join(PUBLIC_DIR, "states")).filter((state) =>
    fs.existsSync(path.join(PUBLIC_DIR, "states", state, `${state}_DATA.csv`)),
  );

  const historical = {};
  for (const state of listDirs(path.join(PUBLIC_DIR, "historical"))) {
    const months = fs
      .readdirSync(path.join(PUBLIC_DIR, "historical", state))
      .map((file) => file.match(/^(\d{4})_(\d{2})\.csv$/))
      .filter(Boolean)
      .map(([, year, month]) => `${year}_${month}`)
      .sort();
    if (months.length) historical[state] = months;
  }

  return { states, historical };
}

function dataManifest() {
  return {
    name: "data-manifest",
    resolveId: (id) => (id === MANIFEST_ID ? RESOLVED_MANIFEST_ID : null),
    load: (id) =>
      id === RESOLVED_MANIFEST_ID
        ? `export default ${JSON.stringify(buildDataManifest())};`
        : null,
    configureServer(server) {
      // Regenerate the manifest in dev when data files are added or removed.
      const refresh = (file) => {
        if (!/[\\/]public[\\/](states|historical)[\\/]/.test(file)) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_MANIFEST_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", refresh);
      server.watcher.on("unlink", refresh);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: "/grower-dashboard/",
  plugins: [react(), tailwindcss(), wasm(), topLevelAwait(), dataManifest()],
  resolve: {
    alias: {
      "@": path.resolve(ROOT_DIR, "./src"),
    },
  },
});
