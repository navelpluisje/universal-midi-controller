import styled from 'styled-components';
import { ControlPosition } from 'types';

const calculatePosition = (position: ControlPosition) => (
  `${position.y - 2} / ${position.x - 3} / ${position.y + 2} / ${position.x + 3}`
);

interface DisplayWrapperProps {
  position: ControlPosition;

}
export const StyledVuMeterWrapper = styled.section<DisplayWrapperProps>`
  /* height: calc(var(--grid-size) * 10); */
  height: calc(var(--grid-size) * ${({ position }) => (position.height || 10)});
  width: calc(var(--grid-size) * 6);
  grid-area: ${({ position }) => calculatePosition(position)};
  `;


interface DisplayLineProps {
  $value: number;
}

export const StyledVuMeter = styled.div<DisplayLineProps>`
  border: var(--default-border);
  position: relative;
  border-radius: 4px;
  width: 10px;
  height: 100%;
  justify-self: center;

  &::after {
    display: block;
    position: absolute;
    bottom: 0;
    height: ${({ $value }) => ($value / 127) * 100}%;
    content: '';
    background-color: var(--default-text);
    width: 100%;
  }

`;
