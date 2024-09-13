import { StoryObj } from '@storybook/react';
import { McuDisplay } from '.';

export default {
  argTypes: {
  },
  title: 'Shared/Components/Atoms/McuDisplay',
  component: McuDisplay,
  tags: ['autodocs'],
};

export const McuDisplayStory: StoryObj<typeof McuDisplay> = {
  name: 'McuDisplay',
  args: {
    line1: 'Gtr Ld L',
    line2: '-0.3dB',
    nbChars: 8,
  },
};
