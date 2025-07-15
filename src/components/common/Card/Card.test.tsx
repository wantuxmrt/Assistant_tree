// src/components/common/Card/Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders children content', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('applies elevation class', () => {
    const { container } = render(<Card elevation="high">Test</Card>);
    expect(container.firstChild).toHaveClass('high');
  });

  test('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">Test</Card>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});