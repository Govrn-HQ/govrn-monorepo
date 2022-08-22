import GlobalPolyFill from "@esbuild-plugins/node-globals-polyfill";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // plugins: [react()], // having this in causes a runtime error
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
        'globalThis.process.env.NODE_ENV': 'development',
      },
      plugins: [
        GlobalPolyFill({
          process: true,
          buffer: true,
        }),

      ],
    },
  },
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
    },
  },
});
