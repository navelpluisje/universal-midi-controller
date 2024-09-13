// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import { MidiMessage, MidiUpdateCallback } from 'types';

contextBridge.exposeInMainWorld('midiAPI', {
  onMidiMessage: (callback: MidiUpdateCallback) => ipcRenderer.on('midi-message', callback),
  onSysexMessage: (callback: MidiUpdateCallback) => ipcRenderer.on('sysex-message', callback),
  onMidiUpdate: (callback: MidiUpdateCallback) => ipcRenderer.on('midi-update', callback),
  sendMidiMessage: (midiMessage: MidiMessage) => ipcRenderer.invoke('midi:send-message', midiMessage),

  // we can also expose variables, not just functions
});

contextBridge.exposeInMainWorld('windowAPI', {
  hideMidiMonitor: () => ipcRenderer.invoke('hide-midi-monitor'),
  openMidiMonitor: () => ipcRenderer.invoke('show-midi-monitor'),
});
