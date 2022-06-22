import { defineConfig } from 'vite';
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
    tsconfigPaths({
      root: '../..',
    }),
    externalPlugin,
  ],
  build: {
    target: 'esnext',
  },
});
