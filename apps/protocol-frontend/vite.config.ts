import GlobalPolyFill from '@esbuild-plugins/node-globals-polyfill';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

let defaultAliases = {
  process: 'process/browser',
  stream: 'stream-browserify',
  zlib: 'browserify-zlib',
  util: 'util',
};
const includeWalletConnectResolve = {
  '@walletconnect/ethereum-provider':
    '@walletconnect/ethereum-provider/dist/umd/index.min',
};
if (process.env.NODE_ENV === 'production') {
  defaultAliases = { ...defaultAliases, ...includeWalletConnectResolve };
}

export default defineConfig({
  plugins: [
    tsconfigPaths({
      root: '../..',
    }),
  ],
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
    alias: defaultAliases,
  },
});
