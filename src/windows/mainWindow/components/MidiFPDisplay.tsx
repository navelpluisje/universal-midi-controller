import { FC, useMemo } from 'react';
import { midiSelectors, useAppSelector } from 'mainWindow/store';
import { FaderportDisplay } from 'shared/components/atoms/FaderportDisplay';
import { ControlPosition } from 'types';
import { Line } from 'shared/components/atoms/FaderportDisplay/types';

export interface DisplayFPControl {
  uuid: string;
  type: 'DisplayFP';
  position: ControlPosition;
  channel: number;
}

interface Props {
  settings: DisplayFPControl;
}

const getAlignment = (alignment: number): Line['align'] => {
  if ((alignment & 1) > 0) {
    return 'start';
  }

  if ((alignment & 2) > 0) {
    return 'end';
  }

  return 'center';
};

const getInvert = (alignment: number): Line['invert'] => {
  return (alignment & 4) > 0;
};

export const MidiFPDisplay: FC<Props> = ({ settings }) => {
  const line1: any = useAppSelector(midiSelectors.getSysexValue([0x12, settings.channel, 0x00]));
  const line2: any = useAppSelector(midiSelectors.getSysexValue([0x12, settings.channel, 0x01]));
  const line3: any = useAppSelector(midiSelectors.getSysexValue([0x12, settings.channel, 0x02]));
  const line4: any = useAppSelector(midiSelectors.getSysexValue([0x12, settings.channel, 0x03]));

  const line1Value = useMemo<Line>(() => ({
    text: (line1?.value || []).map((char: number) => String.fromCharCode(char)).join(''),
    align: getAlignment(line1?.align || 0),
    invert: getInvert(line1?.align || 0),
  }
  ), [line1]);
  const line2Value = useMemo<Line>(() => ({
    text: (line2?.value || []).map((char: number) => String.fromCharCode(char)).join(''),
    align: getAlignment(line2?.align || 0),
    invert: getInvert(line2?.align || 0),
  }), [line2]);
  const line3Value = useMemo<Line>(() => ({
    text: (line3?.value || []).map((char: number) => String.fromCharCode(char)).join(''),
    align: getAlignment(line3?.align || 0),
    invert: getInvert(line3?.align || 0),
  }), [line3]);
  const line4Value = useMemo<Line>(() => ({
    text: (line4?.value || []).map((char: number) => String.fromCharCode(char)).join(''),
    align: getAlignment(line3?.align || 0),
    invert: getInvert(line4?.align || 0),
  }), [line4]);


  return (
    <FaderportDisplay
      line1={line1Value}
      line2={line2Value}
      line3={line3Value}
      line4={line4Value}
      position={settings.position}
    />
  );
};
