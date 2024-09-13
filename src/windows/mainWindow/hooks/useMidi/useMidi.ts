import { useContext, useMemo } from 'react';
import { MidiContext } from './context';
import { getMidiKey } from './helpers';
import { midiSelectors, useAppSelector } from 'mainWindow/store';

interface Props {
  command: number;
  key: number;
}

export const useMidi = ({ command, key }: Props) => {
  const { sendMessage } = useContext(MidiContext);
  const midiKey = useMemo(() => getMidiKey(command, key), [command, key]);
  const midiValue = useAppSelector(midiSelectors.getMidiValue(midiKey));

  const sendValue = (value: number) => {
    sendMessage([command, key, value]);
  };

  return {
    sendValue,
    midiValue,
  };
};
