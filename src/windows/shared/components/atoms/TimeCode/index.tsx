import { FC } from 'react';
import { TimeCodeItem, TimeCodeWrapper } from './TimeCode.styled';
import { ControlPosition } from 'types';

interface Props {
  smtp: boolean;
  beats: boolean;
  hours: string;
  minutes: string;
  seconds: string;
  frames: string;
  position: ControlPosition;
}

export const TimeCode: FC<Props> = ({ frames, hours, minutes, seconds, position, beats, smtp }) => {
  return (
    <>
      {beats && 'BEATS'}
      {smtp && 'SMTP'}
      <TimeCodeWrapper position={position}>
        <TimeCodeItem $label='Hrs'>{hours}</TimeCodeItem>
        <TimeCodeItem $label='Min'>{minutes}</TimeCodeItem>
        <TimeCodeItem $label='Sec'>{seconds}</TimeCodeItem>
        <TimeCodeItem $label='Fr'>{frames}</TimeCodeItem>
      </TimeCodeWrapper>
    </>
  );
};
