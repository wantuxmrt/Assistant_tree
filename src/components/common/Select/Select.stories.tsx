// src/components/common/Select/Select.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Common/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3', disabled: true },
      { value: 'option4', label: 'Option 4' },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Select an option',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    error: 'Please select a country',
  },
};

export const DisabledOption: Story = {
  args: {
    label: 'Status',
    defaultValue: 'option1',
  },
};