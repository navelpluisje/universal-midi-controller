import { FC, useCallback } from 'react';
import { useMidi } from 'mainWindow/hooks/useMidi/useMidi';
import { ButtonSizes } from 'shared/components/atoms/Button/types';
import { ControlPosition } from 'types';
import { Encoder } from 'shared/components/atoms/Encoder';

export interface EncoderControl {
  uuid: string;
  label: string;
  type: 'Encoder';
  size: ButtonSizes;
  position: ControlPosition;
  midi: [number, number, number];
  click: [number, number, number];
}

interface Props {
  settings: EncoderControl;
}

export const MidiEncoder: FC<Props> = ({ settings }) => {
  const { midi, click } = settings;
  const { sendValue } = useMidi({
    command: midi[0],
    key: midi[1],
  });

  const { sendValue: sendClickValue } = useMidi({
    command: click[0],
    key: click[1],
  });

  const handleEncoderMove = useCallback((value: number) => {
    sendValue(value);
  }, []);

  const handleEncoderClick = useCallback(() => {
    sendClickValue(127);
    setTimeout(() => {
      sendClickValue(0);
    }, 500);
  }, []);

  const handleEncoderLongClick = useCallback(() => {
    sendClickValue(127);
    setTimeout(() => {
      sendClickValue(0);
    }, 2000);
  }, []);

  return (
    <Encoder
      onMove={handleEncoderMove}
      onClick={handleEncoderClick}
      onLongClick={handleEncoderLongClick}
      position={settings.position}
      size='default'
    />
  );
};
