import { FC, PropsWithChildren, useEffect } from 'react';
import { MidiContext } from './context';
import { getMidiKey } from './helpers';
import { MidiMessage } from 'types';
import { midiActions, useAppDispatch } from 'mainWindow/store';

export const MidiProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.midiAPI.onMidiMessage(handleMidiMessage);
    window.midiAPI.onSysexMessage(handleSysexMessage);
  }, []);

  const handleMidiMessage = (_: unknown, [cmd, key, value]: MidiMessage) => {
    try {

      if (cmd >> 4 === 13) {
        dispatch(midiActions.addMidiMessage({ key: `${cmd}`, value: key }));
      } else {
        const _key = getMidiKey(cmd, key);

        if (cmd === 11) {
          console.log(_key);
        }
        dispatch(midiActions.addMidiMessage({ key: _key, value }));
      }
    } catch (e) {
      console.error('handleMidiMessage', e, [cmd, key, value]);
    }
  };

  const handleSysexMessage = (_: unknown, message: any) => {
    try {
      dispatch(midiActions.addSysexMessage(message));
    } catch (e) {
      console.error('handleSysexMessage', e, message);

    }
  };

  const sendMessage = (message: MidiMessage) => {
    window.midiAPI.sendMidiMessage(message);
  };

  return (
    <MidiContext.Provider value={{ sendMessage }}>
      { children}
    </MidiContext.Provider>
  );
};
