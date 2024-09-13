import { StoryObj } from '@storybook/react';
import { Button } from '.';

export default {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
  },
  tags: ['autodocs'],
  component: Button,
  title: 'Shared/Components/Atoms/Button',
};

export const ButtonStory: StoryObj<typeof Button> = {
  name: 'Button Default',
  args: {
    children: 'Test',
    hasFeedback: false,
    size: 'default',
  },
};

export const LargeButtonStory: StoryObj<typeof Button> = {
  name: 'Button Large',
  args: {
    children: 'Test',
    hasFeedback: false,
    size: 'large',
  },
};

export const SmallButtonStory: StoryObj<typeof Button> = {
  name: 'Button Small',
  args: {
    children: 'Test',
    hasFeedback: false,
    size: 'small',
  },
};

