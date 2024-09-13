import { midiReducer, midiSliceActions } from './reducer';

export * as midiSelectors from './selectors';

export const midiActions = {
  ...midiSliceActions,
};

export {
  midiReducer,
};
