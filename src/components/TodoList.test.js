import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('TodoList should render all todos 1', () => {
  const todos = [
    { text: 'Todo 1', isCompleted: false },
    { text: 'Todo 2', isCompleted: false },
  ];
  const { getAllByText } = render(<TodoList todos={todos} />);
  const todoItems = getAllByText(/Todo/);
  expect(todoItems.length).toBe(2);
});
