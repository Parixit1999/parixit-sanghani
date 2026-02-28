import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const titleElement = screen.getByText(/Parixit Sanghani/i);
  expect(titleElement).toBeInTheDocument();
});
