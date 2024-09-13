import type { Configuration } from 'webpack';
// eslint-disable-next-line import/default
import CopyPlugin from 'copy-webpack-plugin';
import { rules } from './webpack.rules';
import { resolve } from './webpack.resolve';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve,
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './node_modules/@julusian/midi/prebuilds', to: './prebuilds' },
      ],
    }),
  ],
};
