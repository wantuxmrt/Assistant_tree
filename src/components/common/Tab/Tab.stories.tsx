// src/components/common/Tab/Tab.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';
import { MdFavorite, MdInfo } from 'react-icons/md';

const meta: Meta<typeof Tab> = {
  title: 'Components/Common/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    label: 'Tab Item',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Active Tab',
    isActive: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Favorites',
    icon: <MdFavorite />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Tab',
    disabled: true,
  },
};