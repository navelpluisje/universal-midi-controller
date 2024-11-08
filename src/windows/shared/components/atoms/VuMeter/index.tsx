import { FC } from 'react';
import { StyledVuMeter, StyledVuMeterWrapper } from './VuMeter.styled';
import { ControlPosition } from 'types';

interface Props {
  value: number;
  position: ControlPosition;
}

export const VuMeter: FC<Props> = ({ value, position }) => (
  <StyledVuMeterWrapper position={position}>
    <StyledVuMeter $value={value} />
  </StyledVuMeterWrapper>
);
