// src/components/common/Select/Select.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';
import userEvent from '@testing-library/user-event';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

describe('Select Component', () => {
  test('renders options', () => {
    render(<Select options={options} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('displays label', () => {
    render(<Select label="Test Label" options={options} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('shows error message', () => {
    render(<Select error="Test error" options={options} />);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  test('calls onChange when selection changes', async () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);
    
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Option 2' })
    );
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});