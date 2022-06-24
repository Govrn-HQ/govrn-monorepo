import { defineConfig } from 'vite';
import strip from '@rollup/plugin-strip';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteExternalsPlugin } from 'vite-plugin-externals';

const externalPlugin = viteExternalsPlugin({
  ...{
    electron: 'electron',
    'electron-fetch': 'electron-fetch',
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    strip(),
    tsconfigPaths({
      root: '../..',
    }),
    externalPlugin,
  ],
  resolve: {
    alias: {
      stream: 'stream-browserify',
      url: 'url-browserify',
      http: 'http-browserify',
      https: 'http-browserify',
      process: 'process-es6',
      '~~': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
        // my fix
        'globalThis.process.env.NODE_ENV': 'development',
      },
    },
  },
});
