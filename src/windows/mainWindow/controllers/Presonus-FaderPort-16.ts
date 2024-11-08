import { v4 as uuidv4 } from 'uuid';
import { ControllerDefinition } from './types';

export const PresonusFaderPort16: ControllerDefinition = {
  name: 'Presonus FaderPort16',
  type: 'MCU',
  width: 164,
  deviceName: {
    macOS: '',
    windows: '',
  },
  controls: [{
    uuid: uuidv4(),
    label: 'Encoder',
    type: 'Encoder',
    size: 'small',
    position: {
      x: 4,
      y: 6,
    },
    midi: [0xb0, 0x10, 0x7f],
    click: [0x90, 0x20, 0x7f],
  },{
    uuid: uuidv4(),
    label: 'Arm',
    type: 'Button',
    size: 'default',
    position: {
      x: 4,
      y: 12,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x00, 0x7f],
  },{
    uuid: uuidv4(),
    label: 'UnSolo',
    type: 'Button',
    size: 'default',
    position: {
      x: 4,
      y: 16,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x01, 0x7f],
  },{
    uuid: uuidv4(),
    label: 'UnMute',
    type: 'Button',
    size: 'default',
    position: {
      x: 4,
      y: 20,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x02, 0x7f],
  },{
    uuid: uuidv4(),
    label: 'Bypass',
    type: 'Button',
    size: 'default',
    position: {
      x: 4,
      y: 28,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x03, 0x7f],
  },{
    uuid: uuidv4(),
    label: 'Macro',
    type: 'Button',
    size: 'default',
    position: {
      x: 4,
      y: 32,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x04, 0x7f],
  },{
    uuid: uuidv4(),
    label: 'Link',
    type: 'Button',
    size: 'default',
    position: {
      x: 4,
      y: 36,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x05, 0x7f],
  },
  /**
     * Left Shift
     */
  {
    uuid: uuidv4(),
    label: 'Shift',
    type: 'Button',
    size: 'default',
    position: {
      x: 4,
      y: 42,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x06, 0x7f],
  },
  // Displays
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 0,
    position: {
      x: 12,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 1,
    position: {
      x: 20,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 2,
    position: {
      x: 28,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 3,
    position: {
      x: 36,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 4,
    position: {
      x: 44,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 5,
    position: {
      x: 52,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 6,
    position: {
      x: 60,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 7,
    position: {
      x: 68,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 8,
    position: {
      x: 76,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 9,
    position: {
      x: 84,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 10,
    position: {
      x: 92,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 11,
    position: {
      x: 100,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 12,
    position: {
      x: 108,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 13,
    position: {
      x: 116,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 14,
    position: {
      x: 124,
      y: 6,
    },
  },
  {
    uuid: uuidv4(),
    type: 'DisplayFP',
    channel: 15,
    position: {
      x: 132,
      y: 6,
    },
  },
  // Select Buttons
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 12,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x18, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 20,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x19, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 28,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x1a, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 36,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x1b, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 44,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x1c, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 52,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x1d, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 60,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x1e, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 68,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x1f, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 76,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x07, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 84,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x21, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 92,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x22, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 100,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x23, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 108,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x24, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 116,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x25, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 124,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x26, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Select',
    type: 'Button',
    size: 'default',
    position: {
      x: 132,
      y: 14,
    },
    hasRGB: true,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x27, 0x7f],
  },
  // Solo buttons
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 12,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x08, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 20,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x09, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 28,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x0a, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 36,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x0b, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 44,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x0c, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 52,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x0d, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 60,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x0e, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 68,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x0f, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 76,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x50, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 84,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x51, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 92,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x52, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 100,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x53, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 108,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x54, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 116,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x55, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 124,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x56, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Solo',
    type: 'Button',
    size: 'default',
    position: {
      x: 132,
      y: 18,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x57, 0x7f],
  },
  // Mute buttons
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 12,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x10, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 20,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x11, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 28,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x12, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 36,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x13, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 44,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x14, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 52,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x15, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 60,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x16, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 68,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x17, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 76,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x78, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 84,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x79, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 92,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x7a, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 100,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x7b, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 108,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x7c, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 116,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x7d, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 124,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x7e, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Mute',
    type: 'Button',
    size: 'default',
    position: {
      x: 132,
      y: 22,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x7f, 0x7f],
  },
  // The Track Faders
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 12,
      y: 30,
      height: 26,
    },
    midi: [0xe0, 0x7f, 0x7f],
    touch: [0x90, 0x68, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 20,
      y: 30,
      height: 26,
    },
    midi: [0xe1, 0x7f, 0x7f],
    touch: [0x90, 0x69, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 28,
      y: 30,
      height: 26,
    },
    midi: [0xe2, 0x7f, 0x7f],
    touch: [0x90, 0x6a, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 36,
      y: 30,
      height: 26,
    },
    midi: [0xe3, 0x7f, 0x7f],
    touch: [0x90, 0x6b, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 44,
      y: 30,
      height: 26,
    },
    midi: [0xe4, 0x7f, 0x7f],
    touch: [0x90, 0x6c, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 52,
      y: 30,
      height: 26,
    },
    midi: [0xe5, 0x7f, 0x7f],
    touch: [0x90, 0x6d, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 60,
      y: 30,
      height: 26,
    },
    midi: [0xe6, 0x7f, 0x7f],
    touch: [0x90, 0x6e, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 68,
      y: 30,
      height: 26,
    },
    midi: [0xe7, 0x7f, 0x7f],
    touch: [0x90, 0x6f, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 76,
      y: 30,
      height: 26,
    },
    midi: [0xe8, 0x7f, 0x7f],
    touch: [0x90, 0x70, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 84,
      y: 30,
      height: 26,
    },
    midi: [0xe9, 0x7f, 0x7f],
    touch: [0x90, 0x71, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 92,
      y: 30,
      height: 26,
    },
    midi: [0xea, 0x7f, 0x7f],
    touch: [0x90, 0x72, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 100,
      y: 30,
      height: 26,
    },
    midi: [0xeb, 0x7f, 0x7f],
    touch: [0x90, 0x73, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 108,
      y: 30,
      height: 26,
    },
    midi: [0xec, 0x7f, 0x7f],
    touch: [0x90, 0x74, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 116,
      y: 30,
      height: 26,
    },
    midi: [0xed, 0x7f, 0x7f],
    touch: [0x90, 0x75, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 124,
      y: 30,
      height: 26,
    },
    midi: [0xee, 0x7f, 0x7f],
    touch: [0x90, 0x76, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'Fader',
    position: {
      x: 132,
      y: 30,
      height: 26,
    },
    midi: [0xef, 0x7f, 0x7f],
    touch: [0x90, 0x77, 0x7f],
  },
  /**
   * VU Meters
   */
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 18,
      y: 36,
      height: 15,
    },
    midi: [0xd0, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 26,
      y: 36,
      height: 15,
    },
    midi: [0xd1, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 34,
      y: 36,
      height: 15,
    },
    midi: [0xd2, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 42,
      y: 36,
      height: 15,
    },
    midi: [0xd3, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 50,
      y: 36,
      height: 15,
    },
    midi: [0xd4, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 58,
      y: 36,
      height: 15,
    },
    midi: [0xd5, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 66,
      y: 36,
      height: 15,
    },
    midi: [0xd6, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 74,
      y: 36,
      height: 15,
    },
    midi: [0xd7, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 82,
      y: 36,
      height: 15,
    },
    midi: [0xc0, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 90,
      y: 36,
      height: 15,
    },
    midi: [0xc1, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 98,
      y: 36,
      height: 15,
    },
    midi: [0xc2, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 106,
      y: 36,
      height: 15,
    },
    midi: [0xc3, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 114,
      y: 36,
      height: 15,
    },
    midi: [0xc4, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 122,
      y: 36,
      height: 15,
    },
    midi: [0xc5, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 130,
      y: 36,
      height: 15,
    },
    midi: [0xc6, 0x7f],
  },
  {
    uuid: uuidv4(),
    type: 'VuMeter',
    position: {
      x: 138,
      y: 36,
      height: 15,
    },
    midi: [0xc7, 0x7f],
  },
  /** 
   * Fader Mode Buttons
   */
  {
    uuid: uuidv4(),
    label: 'Track',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 8,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x28, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Edit Pl',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 12,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x2b, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Sends',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 16,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x29, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Pan',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 20,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x2a, 0x7f],
  },
  /**
   * Mix Management Buttons
   */
  {
    uuid: uuidv4(),
    label: 'Audio',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 28,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x3e, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'VI',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 32,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x3f, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Bus',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 36,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x40, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'VCA',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 40,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x41, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'All',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 44,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x42, 0x7f],
  },
  /**
   * Shift right
   */
  {
    uuid: uuidv4(),
    label: 'Shift',
    type: 'Button',
    size: 'default',
    position: {
      x: 140,
      y: 48,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x46, 0x7f],
  },
  /**
   * Automation buttons
   */
  // The first row
  {
    uuid: uuidv4(),
    label: 'Latch',
    type: 'Button',
    size: 'default',
    position: {
      x: 148,
      y: 16,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x4e, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Trim',
    type: 'Button',
    size: 'default',
    position: {
      x: 155,
      y: 16,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x4c, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Off',
    type: 'Button',
    size: 'default',
    position: {
      x: 162,
      y: 16,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x4f, 0x7f],
  },
  // The second row
  {
    uuid: uuidv4(),
    label: 'Touch',
    type: 'Button',
    size: 'default',
    position: {
      x: 148,
      y: 20,
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
      x: 155,
      y: 20,
    },
    hasRGB: true,
    hasFeedback: true,
    midi: [0x90, 0x4b, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Read',
    type: 'Button',
    size: 'default',
    position: {
      x: 162,
      y: 20,
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
      x: 148,
      y: 26,
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
      x: 155,
      y: 26,
    },
    midi: [0xb0, 0x3C, 0x7f],
    click: [0x90, 0x53, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Next',
    type: 'Button',
    size: 'default',
    position: {
      x: 162,
      y: 26,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x2f, 0x7f],
  },
  /**
   * Session Navigation
   */
  // The first row
  {
    uuid: uuidv4(),
    label: 'Channel',
    type: 'Button',
    size: 'default',
    position: {
      x: 146,
      y: 32,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x36, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Zoom',
    type: 'Button',
    size: 'default',
    position: {
      x: 152,
      y: 32,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x37, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Scroll',
    type: 'Button',
    size: 'default',
    position: {
      x: 158,
      y: 32,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x38, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Bank',
    type: 'Button',
    size: 'default',
    position: {
      x: 164,
      y: 32,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffffff',
    midi: [0x90, 0x39, 0x7f],
  },
  // The second row
  {
    uuid: uuidv4(),
    label: 'Master',
    type: 'Button',
    size: 'default',
    position: {
      x: 146,
      y: 36,
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
      x: 152,
      y: 36,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x3b, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Section',
    type: 'Button',
    size: 'default',
    position: {
      x: 158,
      y: 36,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x3c, 0x7f],
  }, {
    uuid: uuidv4(),
    label: 'Marker',
    type: 'Button',
    size: 'default',
    position: {
      x: 164,
      y: 36,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x3d, 0x7f],
  },
  // Transport
  {
    uuid: uuidv4(),
    label: 'Stop',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 148,
      y: 46,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ffff00',
    midi: [0x90, 0x5d, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Cycle',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 150,
      y: 42,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#0000ff',
    midi: [0x90, 0x56, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Rewind',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 155,
      y: 42,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x5b, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Forward',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 160,
      y: 42,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x5c, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Record',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 162,
      y: 46,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#ff0000',
    midi: [0x90, 0x5f, 0x7f],
  },
  {
    uuid: uuidv4(),
    label: 'Play',
    type: 'RoundButton',
    size: 'default',
    position: {
      x: 155,
      y: 47,
    },
    hasRGB: false,
    hasFeedback: true,
    color: '#00ff00',
    midi: [0x90, 0x5e, 0x7f],
  },
  ],
};