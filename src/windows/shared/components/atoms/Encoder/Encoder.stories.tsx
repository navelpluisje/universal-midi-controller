import { StoryObj } from '@storybook/react';
import { Encoder } from '.';

export default {
  tags: ['autodocs'],
  component: Encoder,
  title: 'Shared/Components/Atoms/Encoder',
};

export const Default: StoryObj<typeof Encoder> = {
  name: 'Button Default',
  args: {},
};
