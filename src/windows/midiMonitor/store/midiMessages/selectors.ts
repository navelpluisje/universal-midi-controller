import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'midiMonitor/store';

const getMidiMessages = (state: RootState) => state.midiMessages;

export const getAllMidiMessages = createSelector(
  getMidiMessages,
  (midiMessages) => midiMessages.messages,
);
