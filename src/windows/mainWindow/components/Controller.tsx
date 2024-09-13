import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ControllerAreaProps {
  $width: number;
}

const ControllerArea = styled.section<ControllerAreaProps>`
  display: inline-grid;
  grid-template-columns: repeat(${({ $width }) => $width}, var(--grid-size));
  grid-template-rows: repeat(40, var(--grid-size));
  align-items: center;
  justify-items: center;
`;

const ControllerName = styled.div`
  position: absolute;
  font-size: 16px;
  top: 8px;
  right: 16px;
`;

const ControllerWrapper = styled.div`
  margin: 32px 32px 64px;
  padding: 32px;
  display: inline-block;
  border: 2px solid white;
  border-radius: 20px 20px 0 0;
  position: relative;
  box-sizing: border-box;
  
  &::after {
    content: '';
    display: block;
    border: solid white;
    border-width: 0 2px 2px;
    height: 48px;
    width: 100%;
    position: absolute;
    top: 100%;
    left: -2px;
    border-radius: 0 0 45% 45% / 0 0 32px 32px;
  }
`;

interface ControllerProps extends PropsWithChildren {
  width: number;
  name: string;
}

export const Controller: FC<ControllerProps> = ({ children, width, name }) => (
  <ControllerWrapper>
    <ControllerName>{name}</ControllerName>
    <ControllerArea $width={width}>
      {children}
    </ControllerArea>
  </ControllerWrapper>
);
