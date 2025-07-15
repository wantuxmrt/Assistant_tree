// src/components/common/Card/Card.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Common/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: ['none', 'low', 'medium', 'high'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: 'This is a card component',
    elevation: 'medium',
    padding: 'medium',
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h3>Card Title</h3>
        <p>Card content with multiple elements</p>
        <button>Action</button>
      </div>
    ),
    elevation: 'high',
  },
};