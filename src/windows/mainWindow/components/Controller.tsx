import { FC, PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { useResizeDetector } from 'react-resize-detector';
import { ControllerSelect } from './ControllerSelect';
import { useController } from 'mainWindow/hooks/useController/useController';

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

export const Controller: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { activeController } = useController();
  const { width, height, ref } = useResizeDetector();

  useEffect(() => {
    const size = document.querySelector('.main').getBoundingClientRect();

    try {
      if (size) {
        window.midiAPI.setWindowSize({ width: size.width, height: size.height });
      }
    } catch (e) {
      console.log(e);
    }
  }, [width, height]);

  return (
    <ControllerWrapper className='main' ref={ref}>
      <ControllerSelect />
      <ControllerArea $width={activeController.width}>
        {children}
      </ControllerArea>
    </ControllerWrapper>
  );
};
