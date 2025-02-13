// tests/Header.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';

describe('Header Component', () => {
  test('renders the branding text', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    const branding = screen.getByText(/Harshil Chudasama/i);
    expect(branding).toBeTruthy();
  });
});
