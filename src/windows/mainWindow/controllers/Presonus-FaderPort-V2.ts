import { v4 as uuidv4 } from 'uuid';
import { ButtonControl } from 'mainWindow/components/MidiButton';
import { EncoderControl } from 'mainWindow/components/MidiEncoder';
import { FaderControl } from 'mainWindow/components/MidiFader';
import { ToggleButtonControl } from 'mainWindow/components/MidiToggleButton';

export interface ControllerDefinition {
  name: string;
  type: 'MCU' | 'FP';
  width: number;
  deviceName: {
    macOS: string;
    windows: string;
  };
  controls: Array<ButtonControl | FaderControl | ToggleButtonControl | EncoderControl>;
}

export const PresonusFaderPort: ControllerDefinition = {
  name: 'Presonus FaderPort',
  type: 'MCU',
  width: 30,
  deviceName: {
    macOS: '',
    windows: '',
  },
  controls: [{
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 2,
      y: 12,
      height: 28,
    },
    midi: [0xe0, 0x7f, 0x7f],
    touch: [0x90, 0x68, 0x7f],
  },
  // The first row
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 8,
      y: 4,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x08, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 14,
      y: 4,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x10, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Arm',
    type: 'Button',
    size: 'default',
    position: {
      x: 20,
      y: 4,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x00, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Shift',
    type: 'Button',
    size: 'default',
    position: {
      x: 26,
      y: 4,
    },
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x06, 0x7f],
  },
  // The second row
  {
    uuid: uuidv4(),
    label: 'Bypass',
    type: 'Button',
    size: 'default',
    position: {
      x: 8,
      y: 8,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x03, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Touch',
    type: 'Button',
    size: 'default',
    position: {
      x: 14,
      y: 8,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x4d, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Write',
    type: 'Button',
    size: 'default',
    position: {
      x: 20,
      y: 8,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x4b, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Read',
    type: 'Button',
    size: 'default',
    position: {
      x: 26,
      y: 8,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x4a, 0x7f],
  },
  // Encoder and prev/next
  {
    uuid: uuidv4(),
    label: 'Prev',
    type: 'Button',
    size: 'default',
    position: {
      x: 10,
      y: 14,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x2e, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Encoder',
    type: 'Encoder',
    size: 'default',
    position: {
      x: 17,
      y: 14,
    },
    midi: [0xb0, 0x10, 0x7f],
    click: [0x90, 0x20, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Next',
    type: 'Button',
    size: 'default',
    position: {
      x: 24,
      y: 14,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x2f, 0x7f],
  },
  // The third row
  {
    uuid: uuidv4(),
    label: 'Link',
    type: 'Button',
    size: 'default',
    position: {
      x: 8,
      y: 20,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x05, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Pan',
    type: 'Button',
    size: 'default',
    position: {
      x: 14,
      y: 20,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x2a, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Channel',
    type: 'Button',
    size: 'default',
    position: {
      x: 20,
      y: 20,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x36, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Scroll',
    type: 'Button',
    size: 'default',
    position: {
      x: 26,
      y: 20,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x38, 0x7f],
  },
  // The fourth row
  {
    uuid: uuidv4(),
    label: 'Master',
    type: 'Button',
    size: 'default',
    position: {
      x: 8,
      y: 24,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x3a, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Click',
    type: 'Button',
    size: 'default',
    position: {
      x: 14,
      y: 24,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x3b, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Section',
    type: 'Button',
    size: 'default',
    position: {
      x: 20,
      y: 24,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x3c, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Marker',
    type: 'Button',
    size: 'default',
    position: {
      x: 26,
      y: 24,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x3d, 0x7f],
  },
  // Transport
  {
    uuid: uuidv4(),
    label: 'Stop',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 10,
      y: 36,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x5d, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Cycle',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 12,
      y: 30,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#0000ff',
    midi: [0x90, 0x56, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Rewind',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 17,
      y: 30 ,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x5b, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Forward',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 22,
      y: 30,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x5c, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Record',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 24,
      y: 36,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x5f, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Play',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 17,
      y: 37,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x5e, 0x7f],
  }],
};
