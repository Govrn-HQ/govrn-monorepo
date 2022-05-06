import { defineConfig } from 'vite';
import strip from '@rollup/plugin-strip';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [strip(), react(), tsconfigPaths()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      stream: 'stream-browserify',
      url: 'url-polyfill',
      http: 'http-browserify',
      https: 'http-browserify',
      // process: 'process-es6',
      '~~': resolve(__dirname, 'src'),
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
