import styled from 'styled-components';
import { ControlPosition } from 'types';

const calculatePosition = (position: ControlPosition) => (
  `${position.y - 2} / ${position.x - 10} / ${position.y + 2} / ${position.x + 10}`
);


interface TimeCodeWrapperProps {
    position: ControlPosition;
}

export const TimeCodeWrapper = styled.section<TimeCodeWrapperProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: calc(var(--grid-size) * 4);
  gap: var(--grid-size);
  grid-area: ${({ position }) => calculatePosition(position)};
  padding: 5px 0;
  width: calc(var(--grid-size) * 20);
`;

export const Led = styled.span`
  width: 8px;
  height: 8px;
  border: var(--default-border);
  
`;

interface TimeCodeItemProps {
  $label: string;
}

export const TimeCodeItem = styled.div<TimeCodeItemProps>`
  border: var(--default-border);
  border-radius: 4px 4px 0 0;
  font-size: 16px;
  width: calc(var(--grid-size) * 4);
  text-align: center;
  position: relative;
  
  &::after {
    background-color: white;
    border: var(--default-border);
    border-radius: 0 0 4px 4px;
    
    color: #333;
    content: '${({ $label }) => $label}';
    display: flex;
    width: 100%;
    height: 1rem;
    left: -1px;
    line-height: 1;
    font-size: 12px;
    justify-content: center;
    font-weight: 500;
    position: absolute;
    top: 100%;
    text-transform: uppercase;
  }
`;
