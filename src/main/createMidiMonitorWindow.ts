import { BrowserWindow } from 'electron';

declare const MIDI_MONITOR_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export const createMidiMonitorWindow = () => {
  const midiMonitorWindow = new BrowserWindow({
    height: 400,
    show: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    width: 600,
  });

  midiMonitorWindow.removeMenu();
  midiMonitorWindow.loadURL(MIDI_MONITOR_WEBPACK_ENTRY);

  return midiMonitorWindow;
};
