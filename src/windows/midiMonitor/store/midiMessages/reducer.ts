import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { MidiStandardMessage } from 'types';

interface MidiMessagesState {
  messages: MidiStandardMessage[];
}

const initialState: MidiMessagesState = {
  messages: [],
};

export const midiMessagesSlice = createSlice({
  initialState: initialState,

  name: 'midi-messages',
  reducers: {
    add: (state, action: PayloadAction<MidiStandardMessage>) => {
      state.messages.push(action.payload);
    },
    clear: (state) => {
      state.messages = [];
    },
  },
});

export const midiMessagesActions = midiMessagesSlice.actions;

export const midiMessagesReducer =  midiMessagesSlice.reducer;
