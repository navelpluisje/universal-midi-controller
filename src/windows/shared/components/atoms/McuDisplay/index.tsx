import { FC } from 'react';
import { DisplayLine, DisplayWrapper } from './McuDisplay.styled';
import { ControlPosition } from 'types';


interface Props {
  line1: string;
  line2: string;
  nbChars: number;
  position: ControlPosition;
}

export const McuDisplay: FC<Props> = ({ line1, line2, nbChars = 8, position }) => (
  <DisplayWrapper position={position}>
    <DisplayLine>{line1.substring(0, nbChars).padEnd(nbChars, ' ')}</DisplayLine>
    <DisplayLine>{line2}</DisplayLine>
  </DisplayWrapper>
);
