import { FC } from 'react';
import { Fader } from 'shared/components/atoms';
import { useMidi } from 'mainWindow/hooks/useMidi/useMidi';
import { ControlPosition } from 'types';

export interface FaderControl {
  uuid: string;
  type: 'Fader';
  position: ControlPosition;
  midi: [number, number, number];
  touch: [number, number, number];
}

interface Props {
  settings: FaderControl;
}

export const MidiFader: FC<Props> = ({ settings: { midi, position } }) => {
  const { midiValue, sendValue } = useMidi({
    command: midi[0],
    key: midi[1],
  });

  const handleFaderMove = (val: number) => {
    sendValue(val);
  };

  const handleFaderTouch = () => {
    // Send midi message
  };

  const handleFaderRelease = () => {
    // Send midi message
  };

  return (
    <Fader
      maxValue={127}
      minValue={-100}
      onFaderMove={handleFaderMove}
      onFaderTouch={handleFaderTouch}
      onFaderRelease={handleFaderRelease}
      value={midiValue}
      position={position}
    />
  );
};
