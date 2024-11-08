import { v4 as uuidv4 } from 'uuid';
import { ControllerDefinition } from './types';

export const McuStyle: ControllerDefinition = {
  name: 'MCU Style',
  type: 'MCU',
  width: 50,
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
