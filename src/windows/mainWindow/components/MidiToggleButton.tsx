import { FC, useCallback, useState } from 'react';
import { Button } from 'shared/components/atoms';
import { useMidi } from 'mainWindow/hooks/useMidi/useMidi';
import { ButtonSizes } from 'shared/components/atoms/Button/types';
import { ControlPosition } from 'types';

export interface ToggleButtonControl {
  uuid: string;
  label: string;
  type: 'ToggleButton';
  size: ButtonSizes;
  position: ControlPosition;
  color?: string;
  midi: [number, number, number];
}

interface Props {
  settings: ToggleButtonControl;
}

export const MidiToggleButton: FC<Props> = ({ settings }) => {
  const { midi, label } = settings;
  const [active, setActive] = useState(false);
  const { sendValue } = useMidi({
    command: midi[0],
    key: midi[1],
  });

  const handleButtonDown = useCallback(() => {
    if (active) {
      sendValue(0);
      setActive(false);
    } else {
      sendValue(127);
      setActive(true);
    }
  }, [active]);

  return (
    <Button
      onClick={handleButtonDown}
      active={active}
      color={settings.color}
      position={settings.position}
      hasRGB={false}
      hasFeedback
    >
      {label}
    </Button>
  );
};
