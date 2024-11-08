import { StoryObj } from '@storybook/react';
import { VuMeter } from '.';

export default {
  argTypes: {
  },
  title: 'Shared/Components/Atoms/VuMeter',
  component: VuMeter,
  tags: ['autodocs'],
};

export const McuDisplayStory: StoryObj<typeof VuMeter> = {
  name: 'McuDisplay',
  args: {
    position: {
      x: 4,
      y: 4,
    },
    value: 33,
  },
};
