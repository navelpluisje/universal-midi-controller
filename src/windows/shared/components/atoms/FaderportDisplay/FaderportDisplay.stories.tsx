import { StoryObj } from '@storybook/react';
import { FaderportDisplay } from '.';

export default {
  argTypes: {
  },
  title: 'Shared/Components/Atoms/FaderPortDisplay',
  component: FaderportDisplay,
  tags: ['autodocs'],
};

export const McuDisplayStory: StoryObj<typeof FaderportDisplay> = {
  name: 'McuDisplay',
  args: {
    position: {
      x: 4,
      y: 4,
    },
    line1: {
      align: 'start',
      invert: false,
      text: 'Text',
    },
    line2: {
      align: 'center',
      invert: false,
      text: 'Text',
    },
    line3: {
      align: 'end',
      invert: false,
      text: 'Text',
    },
    line4: {
      align: 'center',
      invert: true,
      text: 'Text',
    },
  },
};
