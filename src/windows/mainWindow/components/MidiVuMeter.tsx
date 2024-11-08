import { FC } from 'react';
import { VuMeter } from 'shared/components/atoms';
import { useMidi } from 'mainWindow/hooks/useMidi/useMidi';
import { ControlPosition } from 'types';

export interface VuMeterControl {
  uuid: string;
  type: 'VuMeter';
  position: ControlPosition;
  midi: [number, number];
}

interface Props {
  settings: VuMeterControl;
}

export const MidiVuMeter: FC<Props> = ({ settings }) => {
  const { midi, position  } = settings;
  const { midiValue } = useMidi({
    command: midi[0],
  });

  return (
    <VuMeter
      value={midiValue} position={position} />
  );
};
