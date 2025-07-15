// src/components/common/Button/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('shows loading spinner when isLoading=true', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button').querySelector('.spinner')).toBeInTheDocument();
  });

  test('is disabled when isLoading or disabled', () => {
    const { rerender } = render(<Button isLoading>Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    
    rerender(<Button disabled>Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});