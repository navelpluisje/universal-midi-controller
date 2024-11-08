import { PresonusFaderPort16 } from './Presonus-FaderPort-16';
import { PresonusFaderPort } from './Presonus-FaderPort-8';
import { PresonusFaderPortV2 } from './Presonus-FaderPort-V2';

export const controllers = {
  PresonusFaderPort16,
  PresonusFaderPort,
  PresonusFaderPortV2,
};

export type ControllerName = keyof typeof controllers;
