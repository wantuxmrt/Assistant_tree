// src/components/common/Input/Input.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  test('renders with label', () => {
    render(<Input label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('shows error message', () => {
    render(<Input error="Test error" />);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  test('displays start icon', () => {
    render(<Input startIcon={<span data-testid="icon" />} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('applies fullWidth class', () => {
    const { container } = render(<Input fullWidth />);
    expect(container.firstChild).toHaveClass('fullWidth');
  });
});