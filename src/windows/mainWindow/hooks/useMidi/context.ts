import { createContext } from 'react';
import { MidiMessage } from 'types';

interface Context {
  sendMessage: (message: MidiMessage) => void;
}

export const MidiContext = createContext<Context>({
  sendMessage: () => { return; },
});
