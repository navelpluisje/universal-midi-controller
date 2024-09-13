import { FC } from 'react';
import { useMidi } from 'mainWindow/hooks/useMidi/useMidi';
import { ControlPosition } from 'types';
import { TimeCode } from 'shared/components/atoms/TimeCode';

export interface MidiTimeCodeControl {
  uuid: string;
  type: 'TimeCode';
  position: ControlPosition;
}

interface Props {
  settings: MidiTimeCodeControl;
}

export const MidiTimeCode: FC<Props> = ({ settings }) => {
  // Midi Messages for the leds
  const { midiValue: ledSmtp } = useMidi({
    command: 0x90,
    key: 0x71,
  });
  const { midiValue: ledBeats } = useMidi({
    command: 0x90,
    key: 0x72,
  });
  // Midi messages for the characters
  const { midiValue: val0 } = useMidi({
    command: 0xb0,
    key: 0x40,
  });
  const { midiValue: val1 } = useMidi({
    command: 0xb0,
    key: 0x41,
  });
  const { midiValue: val2 } = useMidi({
    command: 0xb0,
    key: 0x42,
  });
  const { midiValue: val3 } = useMidi({
    command: 0xb0,
    key: 0x43,
  });
  const { midiValue: val4 } = useMidi({
    command: 0xb0,
    key: 0x44,
  });
  const { midiValue: val5 } = useMidi({
    command: 0xb0,
    key: 0x45,
  });
  const { midiValue: val6 } = useMidi({
    command: 0xb0,
    key: 0x46,
  });
  const { midiValue: val7 } = useMidi({
    command: 0xb0,
    key: 0x47,
  });
  const { midiValue: val8 } = useMidi({
    command: 0xb0,
    key: 0x48,
  });
  const { midiValue: val9 } = useMidi({
    command: 0xb0,
    key: 0x49,
  });
  const frames = `${String.fromCharCode(val2)}${String.fromCharCode(val1)}${String.fromCharCode(val0)}`;
  const seconds = `${String.fromCharCode(val4)}${String.fromCharCode(val3)}`;
  const minutes = `${String.fromCharCode(val6)}${String.fromCharCode(val5)}`;
  const hours = `${String.fromCharCode(val9)}${String.fromCharCode(val8)}${String.fromCharCode(val7)}`;

  return (
    <TimeCode
      smtp={ledSmtp !== 0}
      beats={ledBeats !== 0}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      frames={frames}
      position={settings.position}
    />

  );
};
