import { MidiMessage } from '../types';

export const sendMidi = (message: MidiMessage): void => {
  window.midiAPI.sendMidiMessage(message);
};
