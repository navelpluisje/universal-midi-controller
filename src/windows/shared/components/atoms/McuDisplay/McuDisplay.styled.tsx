import styled from 'styled-components';
import { ControlPosition } from 'types';

const calculatePosition = (position: ControlPosition) => (
  `${position.y - 2} / ${position.x - 3} / ${position.y + 2} / ${position.x + 3}`
);

interface DisplayWrapperProps {
    position: ControlPosition;

}
export const DisplayWrapper = styled.section<DisplayWrapperProps>`
  border: var(--default-border);
  border-radius: 4px;
  height: calc(var(--grid-size) * 4);
  width: calc(var(--grid-size) * 6);
  grid-area: ${({ position }) => calculatePosition(position)};
  padding: 0 4px;
`;

export const DisplayLine = styled.div`
  align-items: center;
  display: flex;
  height: 22px;
`;
