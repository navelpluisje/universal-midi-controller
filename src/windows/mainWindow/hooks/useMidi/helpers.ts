import { MidiTypes } from 'types';
import { splitCommandChannel } from 'utils/splitCommandChannel';

export const getMidiKey = (cmd: number, key?: number) => {
  const [command] = splitCommandChannel(cmd);
  let _key: string;

  switch (command) {
  case MidiTypes.ChannelPressure:
  case MidiTypes.PitchBendChange:
    _key = `${cmd}`;
    break;

  default:
    _key = `${cmd}-${key}`;
  }

  return _key;
};
