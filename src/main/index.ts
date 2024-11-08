import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import { MidiMessage, WindowSize } from '../types';
import { getMidiData } from '../utils/getMidiData';
import { MIDIDevice } from '../utils/midiDevice';
import { createMainWindow } from './createMainWindow';
import { createMidiMonitorWindow } from './createMidiMonitorWindow';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow: BrowserWindow;
let midiMonitorWindow: BrowserWindow;

// Set your midi device name here
const midiDevice = new MIDIDevice('NP Controller');

const createWindows = (): void => {
  midiDevice.open();
  // Create the browser window.
  mainWindow = createMainWindow();
  midiMonitorWindow = createMidiMonitorWindow();

  // Open the DevTools.
  midiDevice.midiInput.ignoreTypes(false, true, true);
  midiDevice.midiInput.on('message', (deltaTime: number, message: MidiMessage) => {
    try {
      if (message.length < 4) {
        const midiMessage = getMidiData(message, deltaTime);
        midiMonitorWindow.webContents.send('midi-update', midiMessage);
        mainWindow.webContents.send('midi-message', message);

        return;
      }
      mainWindow.webContents.send('sysex-message', message);
    } catch (e) {
      console.log('onMessage', e, message);
    }

  });

  mainWindow.on('close', () => {
    app.quit();
  });
  // mainWindow.webContents.openDevTools();

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindows();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindows();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.handle('show-midi-monitor', () => {
  if (midiMonitorWindow.isDestroyed()) {
    midiMonitorWindow = createMidiMonitorWindow();
  }
  midiMonitorWindow.show();
});

ipcMain.handle('hide-midi-monitor', () => {
  if (!midiMonitorWindow.isDestroyed()) {
    midiMonitorWindow.hide();
  }
});

ipcMain.handle('midi:send-message', (_, midiMessage: MidiMessage) => {
  midiDevice.sendMessage(midiMessage);
});

ipcMain.handle('window:set-size', (_, windowSize: WindowSize) => {
  try {
    mainWindow.setSize(Math.floor(windowSize.width) + 1, Math.floor(windowSize.height) + 1, true);
  } catch (e) {
    console.log({ e });
  }
});

app.whenReady().then(() => {
  installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});

