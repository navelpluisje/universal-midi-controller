import path from 'path';
import type { Configuration } from 'webpack';

export const resolve: Required<Configuration>['resolve'] = {
  alias: {
    main: path.resolve(__dirname, '../src/main/'),
    mainWindow: path.resolve(__dirname, '../src/windows/mainWindow'),
    midiMonitor: path.resolve(__dirname, '../src/windows/midiMonitor'),
    preload: path.resolve(__dirname, '../src/preload/'),
    shared: path.resolve(__dirname, '../src/windows/shared'),
    types: path.resolve(__dirname, '../src/types/'),
    utils: path.resolve(__dirname, '../src/utils/'),
  },
  extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
};
