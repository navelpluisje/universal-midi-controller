import { FC, MouseEvent as ReactMouseEvent, useRef } from 'react';
import { Knob } from './Encoder.styled';
import { ControlPosition } from 'types';

interface Props {
  onMove: (value: number) => void;
  onClick: (value: number) => void;
  onLongClick: (value: number) => void;
  position: ControlPosition;
  size: 'default' | 'large';
}

export const Encoder: FC<Props> = ({ onMove, onClick, onLongClick, position, size }) => {
  const knobRef = useRef(null);
  const startRotate = useRef(false);
  let prevValue = 0;

  const handleMouseUp = () => {
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('mousemove', handleMouseMove);

  };

  const handleMouseMove = (event: MouseEvent) => {
    if (event.clientX === prevValue) {
      return;
    }
    let direction = 0b1000000;

    if (event.clientX > prevValue) {
      direction = 0;
    }
    onMove(Math.abs(event.clientX - prevValue) + direction);
    prevValue = event.clientX;
  };

  const handleDoubleClick = () => {
    onClick(127);
  };

  const handleMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    console.log({ event });

    if (event.shiftKey) {
      onClick(127);
    }

    if (event.ctrlKey) {
      onLongClick(127);
    }
    startRotate.current = true;
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    prevValue = event.clientX;
  };

  return (
    <Knob
      onMouseDown={handleMouseDown}
      ref={knobRef}
      position={position}
      size={size}
      onDoubleClick={handleDoubleClick}
      title="shift+click: regular encoder click, control+click: long press"
    />
  );
};
