import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo App', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todo App/i);
  expect(titleElement).toBeInTheDocument();
});
