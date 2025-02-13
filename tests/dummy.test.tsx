import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Dummy Test', () => {
  it('renders a dummy component', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
