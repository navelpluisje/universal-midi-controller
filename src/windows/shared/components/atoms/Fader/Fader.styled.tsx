import styled from 'styled-components';
import { ControlPosition } from 'types';

const calculatePosition = (position: ControlPosition) => (
  `${position.y - 2} / ${position.x} / ${position.y + 24} / ${position.x + 1}`
);

interface FaderCapProps {
    $noTransition?: boolean;
}

export const FaderCap = styled.div<FaderCapProps>`
  background-color: var(--background-color);
  border: var(--default-border);
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  height: 30px;
  left: 0;
  position: absolute;
  top: 100px;
  width: 20px;
  transition: top .2s ease;

  &.moving {
    transition-duration: 0ms;
  }
`;

export const FaderTrack = styled.div`
    background-color: var(--background-color);
    border: var(--default-border);
    border-radius: 4px;
    box-sizing: border-box;
    height: 100%;
    width: 8px;
    `;

interface FaderWrapProps {
  position: ControlPosition;
}

export const FaderWrap = styled.section<FaderWrapProps>`
    position: relative;
    width: calc(2 * var(--grid-size));
    display: flex;
    align-items: center;
    flex-direction: column;
    user-select: none;
    height: calc(var(--grid-size) * ${({ position }) => (position.height || 10)});
    grid-area: ${({ position }) => calculatePosition(position)}
`;

export const FaderLabel = styled.div`
    color: var(--default-text);
    font-weight: 600;
    font-size: 16px;
    margin-top: 4px;
`;
