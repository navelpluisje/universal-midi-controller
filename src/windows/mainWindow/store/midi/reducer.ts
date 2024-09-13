import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeviceType } from 'types';

export interface MidiState {
  type: DeviceType;
  sysex: Record<string, {
    id: number[];
    value: number[];
  }>;
  midi: Record<string, number>;
}

const initialState: MidiState = {
  type: 'MCU',
  sysex: {},
  midi: {},
};

type AddMessagePayload = {
  key: string;
  value: number;
}

type AddSysexPayload = number[];

const midiSlice = createSlice({
  initialState: initialState,
  name: 'midi',
  reducers: {
    setDeviceType(state, { payload }: PayloadAction<DeviceType>) {
      state.type = payload;
    },
    addMidiMessage(state, action: PayloadAction<AddMessagePayload>) {
      const { key, value } = action.payload;
      state.midi[key] = value;

    },
    addSysexMessage(state, { payload }: PayloadAction<AddSysexPayload>) {
      switch (state.type) {
      case 'MCU':
        state.sysex[`${payload[5]}-${payload[6]}`] = {
          id: payload.splice(5, 2),
          value: payload.slice(5, -1),
        };
        break;

      case 'FP': {
        if (payload[5] === 12) {
          state.sysex[`${payload[5]}-${payload[6]}-${payload[7]}`] = {
            id: payload.splice(5, 3),
            value: payload.slice(8, -1),
          };
        }

        if (payload[5] === 13) {
          state.sysex[`${payload[5]}-${payload[6]}`] = {
            id: payload.splice(5, 2),
            value: payload.slice(7, -1),
          };
        }
        break;
      }

      default:
      }
    },
  },
});

export const midiSliceActions = midiSlice.actions;

export const midiReducer =  midiSlice.reducer;
