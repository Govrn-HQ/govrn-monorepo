import GlobalPolyFill from '@esbuild-plugins/node-globals-polyfill';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      root: '../..',
    }),
    vitePluginRequire({
      // @fileRegex RegExp
      // optional：default file processing rules are as follows
      // fileRegex:/(.jsx?|.tsx?|.vue)$/
    }),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
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
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
    },
  },
});
