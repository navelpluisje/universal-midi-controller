import styled, { css } from 'styled-components';
import { Line } from './types';
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
  height: calc(var(--grid-size) * 10);
  width: calc(var(--grid-size) * 6);
  grid-area: ${({ position }) => calculatePosition(position)};
  padding: 0 4px;
`;


interface DisplayLineProps {
  $line: Line;
}

export const DisplayLine = styled.div<DisplayLineProps>`
  text-align: ${({ $line }) => $line.align};
  height: 22px;
  white-space: nowrap;
  overflow: hidden;
  ${({ $line }) => $line.invert && css`
    color: var(--background-color);
    background-color: var(--default-text)
  `}
`;
