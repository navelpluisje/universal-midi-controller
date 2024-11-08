import { ButtonControl } from 'mainWindow/components/MidiButton';
import { EncoderControl } from 'mainWindow/components/MidiEncoder';
import { FaderControl } from 'mainWindow/components/MidiFader';
import { DisplayFPControl } from 'mainWindow/components/MidiFPDisplay';
import { DisplayMCUControl } from 'mainWindow/components/MidiMcuDisplay';
import { MidiTimeCodeControl } from 'mainWindow/components/MidiTimeCode';
import { ToggleButtonControl } from 'mainWindow/components/MidiToggleButton';
import { VuMeterControl } from 'mainWindow/components/MidiVuMeter';

export interface ControllerDefinition {
  name: string;
  type: 'MCU' | 'FP';
  width: number;
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
    DisplayFPControl |
    MidiTimeCodeControl |
    VuMeterControl
  >;
}

