import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

test('TodoItem should call toggleTodo and removeTodo', () => {
  const todo = { text: 'Test Todo', isCompleted: false };
  const toggleTodo = jest.fn();
  const removeTodo = jest.fn();
  const { getByText } = render(
    <TodoItem todo={todo} index={0} toggleTodo={toggleTodo} removeTodo={removeTodo} />
  );

  const completeButton = getByText('Complete');
  fireEvent.click(completeButton);
  expect(toggleTodo).toHaveBeenCalledWith(0);

  const removeButton = getByText('x');
  fireEvent.click(removeButton);
  expect(removeTodo).toHaveBeenCalledWith(0);
});
