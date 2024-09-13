import { FC, useMemo } from 'react';
import { midiSelectors, useAppSelector } from 'mainWindow/store';
import { McuDisplay } from 'shared/components/atoms/McuDisplay';
import { ControlPosition } from 'types';

export interface DisplayMCUControl {
  uuid: string;
  type: 'DisplayMCU';
  position: ControlPosition;
  channel: number;
}

interface Props {
  settings: DisplayMCUControl;
}

export const MidiMcuDisplay: FC<Props> = ({ settings }) => {
  const line1: any = useAppSelector(midiSelectors.getSysexValue([0x12, (settings.channel - 1) * 7]));
  const line2: any = useAppSelector(midiSelectors.getSysexValue([0x12, (settings.channel + 7) * 7]));
  const line1Value = useMemo(() => (
    (line1?.value || []).map((char: number) => String.fromCharCode(char)).join('')
  ), [line1]);
  const line2Value = useMemo(() => (
    (line2?.value || []).map((char: number) => String.fromCharCode(char)).join('')
  ), [line2]);

  return (
    <McuDisplay line1={line1Value} line2={line2Value} nbChars={8} position={settings.position} />
  );
};
