import { MidiMessage, MidiStandardMessage } from '../types';
import { splitCommandChannel } from './splitCommandChannel';

export const getMidiData = ([cmd, key, value]: MidiMessage, deltaTime: number): MidiStandardMessage => {
  const [command, channel] = splitCommandChannel(cmd);

  return {
    channel: channel,
    command: command,
    deltaTime: deltaTime,
    key: key,
    message: `[${cmd.toString(16)}, ${key.toString(16)}]`,
    time: '',
    value: value ?? key,
  };
};
