import { useContext, useMemo } from 'react';
import { MidiContext } from './context';
import { getMidiKey } from './helpers';
import { midiSelectors, useAppSelector } from 'mainWindow/store';

interface Props {
  key: number[];
}

export const useMidi = ({ key }: Props) => {
  const { sendMessage } = useContext(MidiContext);
  const midiValue = useAppSelector(midiSelectors.getSysexValue(key));

  const sendValue = (value: number) => {
    sendMessage([command, key, value]);
  };

  return {
    sendValue,
    midiValue,
  };
};
