// src/components/common/Tab/Tab.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tab from './Tab';

describe('Tab Component', () => {
  test('renders label', () => {
    render(<Tab label="Test Tab" />);
    expect(screen.getByText('Test Tab')).toBeInTheDocument();
  });

  test('applies active styles', () => {
    const { container } = render(<Tab label="Active" isActive />);
    expect(container.firstChild).toHaveClass('active');
  });

  test('calls onClick handler', () => {
    const handleClick = jest.fn();
    render(<Tab label="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Tab label="Disabled" disabled onClick={handleClick} />);
    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});