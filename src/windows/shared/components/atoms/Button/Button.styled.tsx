import styled, { css, keyframes } from 'styled-components';
import { ButtonSizes } from './types';
import { ControlPosition } from 'types';

export interface Props {
  size: ButtonSizes;
  $color: string;
  $active: boolean;
  $blinking: boolean;
  hasFeedback: boolean;
  hasRGB: boolean;
  position: ControlPosition;
  $type: 'round' | 'default';
}

const calculatePosition = (position: ControlPosition, offset: number) => (
  `${position.y - offset} / ${position.x - offset} / ${position.y + offset} / ${position.x + offset}`
);

const blink = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.5;
  }
  50.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledButton = styled.button<Props>`
    --button-padding-small: 4px 8px;
    --button-padding-default: 6px 12px;
    --button-padding-large: 8px 16px;
    --button-font-size-small: 10px;
    --button-font-size-default: 12px;
    --button-font-size-large: 14px;

    background-color: var(--background-color);
    border: var(--default-border);
    border-radius: ${({ $type }) => ($type === 'round' ? '50%' : '4px')};
    box-sizing: border-box;
    width: 40px;
    height: ${({ $type }) => ($type === 'round' ? '40px' : '24px')};
    font-size: 8px;
    box-sizing: border-box;
    font-weight: 300;
    position: relative;
    padding: 0;
    /* font-size: ${({ size }) => `var(--button-font-size-${size})`}; */
    text-transform: uppercase;
    grid-area: ${({ position, $type }) => calculatePosition(position, $type === 'round' ? 2 : 1)};

    ${({ hasFeedback, $color, $active, hasRGB, $blinking }) => hasFeedback && css`
      &::after {
        ${$blinking && css`
          animation: ${blink} 1s linear infinite;
        `}
        background-color: ${$color};
        content: '';
        width: 50%;
        position: absolute;
        bottom: 2px;
        border-radius: 999999px;
        left: 50%;
        height: 4px;
        transform: translateX(-50%);
        opacity: ${($active || hasRGB) ? 1 : 0.5};
      }
    `}
`;
