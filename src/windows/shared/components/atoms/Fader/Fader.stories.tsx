import { StoryObj } from '@storybook/react';
import { Fader } from '.';

export default {
  argTypes: {
  },
  title: 'Shared/Components/Atoms/Fader',
  component: Fader,
  tags: ['autodocs'],
};

export const FaderStory: StoryObj<typeof Fader> = {
  name: 'Fader',
  args: {
    minValue: 0,
    maxValue: 127,
    value: 20,
  },
};
