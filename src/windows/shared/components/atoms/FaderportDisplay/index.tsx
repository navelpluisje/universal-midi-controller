import { FC } from 'react';
import { DisplayLine, DisplayWrapper } from './FaderportDisplay.styled';
import { Line } from './types';
import { ControlPosition } from 'types';

interface Props {
  line1: Line;
  line2: Line;
  line3: Line;
  line4: Line;
  position: ControlPosition;
}

export const FaderportDisplay: FC<Props> = ({ line1, line2, line3, line4, position }) => (
  <DisplayWrapper position={position}>
    <DisplayLine $line={line1}>{line1.text}</DisplayLine>
    <DisplayLine $line={line2}>{line2.text}</DisplayLine>
    <DisplayLine $line={line3}>{line3.text}</DisplayLine>
    <DisplayLine $line={line4}>{line4.text}</DisplayLine>
  </DisplayWrapper>
);
