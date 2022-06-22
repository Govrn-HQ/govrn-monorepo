import { defineConfig } from 'vite';
import strip from '@rollup/plugin-strip';
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
    },
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
