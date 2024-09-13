import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { FaderCap, FaderTrack, FaderWrap } from './Fader.styled';
import { clamp } from 'utils/clamp';
import { ControlPosition } from 'types';

export interface Props {
  /**
   * The value of the fader relative to the min and maximum value
   */
  value: number;
  /**
   * The minimum value for the slider
   * @default 0
   */
  minValue?: number;
  /**
   * The maximum value for the slider
   */
  maxValue: number;
  /**
   * Callback function for the fader move. Triggers every time the actual move event triggers
   * @param value The current value while moving the fader
   * @returns 
   */
  onFaderMove: (value: number) => void;
  onFaderTouch?: () => void;
  onFaderRelease?: () => void;
  position: ControlPosition;
}

export const Fader: FC<Props> = ({
  value, onFaderTouch, onFaderRelease, onFaderMove, minValue = 0, maxValue, position,
}) => {
  const faderCapRef = useRef<HTMLDivElement>();
  const faderWrapRef = useRef<HTMLDivElement>();
  const [faderValue, setFaderValue] = useState<number>();
  const moved = useRef(false);

  let hasEvents = false;
  let touched = false;

  const setMoved = useCallback((hasMoved: boolean) => {
    if (hasMoved === moved.current) {
      return;
    }
    moved.current = hasMoved;

    if (hasMoved) {
      faderCapRef.current.classList.add('moving');
    } else {
      faderCapRef.current.classList.remove('moving');
    }
  }, []);

  /**
   * Emulation of the fader touch on a device. This will initialize the fader move and, if set, 
   * trigger the `onFaderTouch` callback method
   */
  const handleFaderTouch = useCallback(() => {
    setFaderCapEvents();
    setMoved(false);
    touched = true;
    // moved.current = false;
    // faderCapRef.current.classList.remove('moving');

    if (onFaderTouch) {
      onFaderTouch();
    }
  }, [faderValue]);

  const handleFaderRelease = () => {
    touched = false;

    if (onFaderRelease) {
      onFaderRelease();
    }
    unsetFaderCapEvents(true);
  };

  const handleFaderMove = useCallback((event: MouseEvent) => {
    if (!touched) { return; }
    setMoved(true);
    // faderCapRef.current.classList.add('moving');
    // moved.current = true;

    const faderCapTopPosition = faderCapRef.current.offsetTop;
    const maxPosition = faderWrapRef.current.offsetHeight - faderCapRef.current.offsetHeight;
    let position = 0;

    if (faderCapTopPosition < 0) {
      position = 0;
    } else if (faderCapTopPosition > maxPosition) {
      position = maxPosition;
    } else {
      position = faderCapTopPosition + event.movementY;
    }

    faderCapRef.current.style.top = `${position}px`;
    const newValue = maxValue - Math.round(clamp(((position / maxPosition) * maxValue), 0, maxValue));

    if (faderValue !== newValue) {
      setFaderValue(newValue);
      !!onFaderMove && onFaderMove(newValue);
    }
  }, [faderValue, maxValue]);

  const handleFaderClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (moved.current) {
      setMoved(false);
      // faderCapRef.current.classList.remove('moving');
      // moved.current = false;

      return;
    }
    const { top: faderTop } = faderWrapRef.current.getBoundingClientRect();
    const mouseY = evt.pageY - faderTop - (faderCapRef.current.offsetHeight / 2);
    const maxPosition = faderWrapRef.current.offsetHeight - faderCapRef.current.offsetHeight;

    faderCapRef.current.style.top = `${clamp(mouseY, 0, maxPosition)}px`;
  };

  /**
   * initial set position of fader and final update of the value when the fader released
   */
  useEffect(() => {
    // If fader is active, we do not update yet.
    if (touched) {
      return;
    }

    const maxPosition = faderWrapRef.current.offsetHeight - faderCapRef.current.offsetHeight;
    const newPosition = (maxPosition / maxValue) * (maxValue - faderValue);
    faderCapRef.current.style.top = `${clamp(newPosition, 0, maxPosition)}px`;
  }, [faderValue, maxValue]);

  useEffect(() => {
    setFaderValue(clamp(value, minValue, maxValue));
  }, [value, minValue, maxValue]);

  const setFaderCapEvents = () => {
    if (!hasEvents) {
      window.addEventListener('mouseup', handleFaderRelease);
      window.addEventListener('mousemove', handleFaderMove);
      hasEvents = true;
    }
  };

  const unsetFaderCapEvents = (force = false) => {
    if (hasEvents && !touched || force) {
      window.removeEventListener('mouseup', handleFaderRelease);
      window.removeEventListener('mousemove', handleFaderMove);
      hasEvents = false;
    }
  };

  return (
    <FaderWrap ref={faderWrapRef} onClick={handleFaderClick} position={position}>
      <FaderCap onMouseDown={handleFaderTouch} ref={faderCapRef} />
      <FaderTrack />
    </FaderWrap>
  );
};
