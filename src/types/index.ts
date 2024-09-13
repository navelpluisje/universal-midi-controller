import { IpcRendererEvent } from 'electron';

export type MidiMessage = [command: number, key: number, value: number | undefined];

export type DeviceType = 'MCU' | 'FP';

export type ControlPosition = {
  x: number;
  y: number;
  height?: number;
}

export enum MidiTypes {
  NoteOff = 0x08,
  NoteOn = 0x09,
  PolyKeyPressure = 0x0A,
  ControlChange = 0x0B,
  ProgramChange = 0x0C,
  ChannelPressure = 0x0D,
  PitchBendChange = 0x0E,
  ExtendedType = 0x0F,
}

export enum MidiExtendedTypes {
  Sysex = 0xF0,
  Mtc = 0xF1,
  Position = 0xF2,
  Select = 0xF3,
  Tune = 0xF6,
  SysexEnd = 0xF7,
  Clock = 0xF8,
  Start = 0xFA,
  Continue = 0xFB,
  Stop = 0xFC,
  Activesense = 0xFE,
  Reset = 0xFF,
}

const allTypes = { ...MidiTypes, ...MidiExtendedTypes };
export type AllMidiTypes = typeof allTypes;

export type MidiStandardMessage = {
  channel: number;
  command: MidiTypes;
  key: number;
  value: number;
  message: string;
  deltaTime: number;
  time: string;
}

export type MidiUpdateCallback = (type: IpcRendererEvent, message: MidiStandardMessage) => void;
