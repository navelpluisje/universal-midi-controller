import { createContext } from 'react';
import { ControllerDefinition } from 'mainWindow/controllers/types';
import { ControllerName } from 'mainWindow/controllers';

interface Context {
  controller: ControllerName;
  controllerList: {
    key: ControllerName;
    name: string;
  }[];
  setController: (name: ControllerName) => void;
  activeController: ControllerDefinition;
}

export const initialControllerState: Context = {
  controller: 'PresonusFaderPort',
  controllerList: [],
  setController: (name: ControllerName) => { console.log(name); },
  activeController: {} as unknown as ControllerDefinition,
};

export const ControllerContext = createContext<Context>(initialControllerState);
