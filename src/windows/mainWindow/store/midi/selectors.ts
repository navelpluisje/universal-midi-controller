import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const getMidiValues = (state: RootState) => state.midi.midi;

const getSysexValues = (state: RootState) => state.midi.sysex;

const getMidiValue = (key: string) => createSelector(getMidiValues, (values) => values[key] || 0);

const getSysexValue = (key: number[]) => createSelector(getSysexValues, (values) => {
  return values[key.join('-')] || {};
});

export {
  getMidiValue,
  getSysexValue,
};
