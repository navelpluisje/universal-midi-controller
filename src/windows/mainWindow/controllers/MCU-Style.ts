import { v4 as uuidv4 } from 'uuid';
import { ButtonControl } from 'mainWindow/components/MidiButton';
import { EncoderControl } from 'mainWindow/components/MidiEncoder';
import { FaderControl } from 'mainWindow/components/MidiFader';
import { ToggleButtonControl } from 'mainWindow/components/MidiToggleButton';
import { DisplayMCUControl } from 'mainWindow/components/MidiMcuDisplay';
import { MidiTimeCodeControl } from 'mainWindow/components/MidiTimeCode';

export interface ControllerDefinition {
  name: string;
  type: 'MCU' | 'FP';
  deviceName: {
    macOS: string;
    windows: string;
  };
  controls: Array<
    ButtonControl |
    FaderControl |
    ToggleButtonControl |
    EncoderControl |
    DisplayMCUControl |
    MidiTimeCodeControl
  >;
}

export const McuStyle: ControllerDefinition = {
  name: 'MCU Style',
  type: 'MCU',
  deviceName: {
    macOS: '',
    windows: '',
  },
  controls: [
    {
      uuid: uuidv4(),
      type: 'TimeCode',
      position: {
        x: 20,
        y: 12,
      },
    },{
      uuid: uuidv4(),
      type: 'DisplayMCU',
      position: {
        x: 4,
        y: 4,
      },
      channel: 1,
    },{
      uuid: uuidv4(),
      type: 'DisplayMCU',
      position: {
        x: 14,
        y: 4,
      },
      channel: 2,
    },{
      uuid: uuidv4(),
      type: 'DisplayMCU',
      position: {
        x: 24,
        y: 4,
      },
      channel: 3,
    },{
      uuid: uuidv4(),
      type: 'DisplayMCU',
      position: {
        x: 34,
        y: 4,
      },
      channel: 4,
    },
  ],
};
