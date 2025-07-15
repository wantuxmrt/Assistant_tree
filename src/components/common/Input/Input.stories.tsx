// src/components/common/Input/Input.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { MdEmail, MdLock, MdError } from 'react-icons/md';

const meta: Meta<typeof Input> = {
  title: 'Components/Common/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'your@email.com',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password is required',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Email',
    startIcon: <MdEmail />,
    placeholder: 'with start icon',
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Password',
    endIcon: <MdLock />,
    type: 'password',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};