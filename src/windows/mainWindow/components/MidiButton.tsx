import { FC, useCallback, useMemo } from 'react';
import { Button } from 'shared/components/atoms';
import { useMidi } from 'mainWindow/hooks/useMidi/useMidi';
import { ButtonSizes } from 'shared/components/atoms/Button/types';
import { ControlPosition } from 'types';

export interface ButtonControl {
  uuid: string;
  label: string;
  type: 'Button' | 'RoundButton';
  size: ButtonSizes;
  position: ControlPosition;
  hasRGB?: boolean;
  hasFeedback?: boolean;
  color?: string;
  midi: [number, number, number];
}

interface Props {
  settings: ButtonControl;
}

const calculateColorValue = (color: number) => {
  if (color === 0) {
    return 0;
  }

  return color * 2 * Math.sqrt(127 / color);
};

export const MidiButton: FC<Props> = ({ settings }) => {
  const { midi, hasRGB = false, hasFeedback = false, label, type } = settings;
  const { midiValue, sendValue } = useMidi({
    command: midi[0],
    key: midi[1],
  });

  const { midiValue: rValue } = useMidi({
    command: midi[0] + 1,
    key: midi[1],
  });

  const { midiValue: gValue } = useMidi({
    command: midi[0] + 2,
    key: midi[1],
  });

  const { midiValue: bValue } = useMidi({
    command: midi[0] + 3,
    key: midi[1],
  });

  const color = useMemo(() => {
    if (!hasRGB) {
      return settings.color;
    }

    return `rgb(${calculateColorValue(rValue)}, ${calculateColorValue(gValue)}, ${calculateColorValue(bValue)})`;
  }, [rValue, gValue, bValue]);

  const active = useMemo(() => {
    return midiValue >= 64 ? true : false;
  }, [midiValue]);

  const blinking = useMemo(() => {
    return midiValue === 0x01;
  }, [midiValue]);

  const handleButtonDown = useCallback(() => {
    sendValue(127);
  }, []);

  const handleButtonUp = useCallback(() => {
    sendValue(0);
  }, []);

  return (
    <Button
      onMouseDown={handleButtonDown}
      onMouseUp={handleButtonUp}
      active={active}
      blinking={ blinking}
      color={color}
      hasRGB={hasRGB}
      hasFeedback={hasFeedback}
      position={settings.position}
      type={type === 'RoundButton' ? 'round' : 'default'}
    >
      {label}
    </Button>
  );
};
