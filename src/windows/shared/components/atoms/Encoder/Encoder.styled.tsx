import styled from 'styled-components';
import { ControlPosition } from 'types';

const calculatePosition = (position: ControlPosition) => (
  `${position.y - 3} / ${position.x - 3} / ${position.y + 3} / ${position.x + 3}`
);

interface KnobProps {
  position: ControlPosition;
  size: 'default' | 'large';

}

export const Knob = styled.section<KnobProps>`
  --knob-size-default: 50px;
  --knob-size-large: 80px;

  border-radius: 50%;
  width: ${({ size }) => `var(--knob-size-${size})`};
  height: ${({ size }) => `var(--knob-size-${size})`};
  border: var(--default-border);
  outline: 1px white dashed;
  grid-area: ${({ position }) => calculatePosition(position)};
`;
