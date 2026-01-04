import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
    test('renders Todo App title', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo App')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('does not add empty todo', () => {
        render(<TodoList />);
        const addButton = screen.getByText('Add');
        fireEvent.click(addButton);

        // Check that no todo is added (no text elements besides the title)
        const todos = screen.queryAllByRole('checkbox');
        expect(todos.length).toBe(0);
    });

    test('adds todo on Enter key press', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');

        fireEvent.click(input); // Focus the input
        fireEvent.change(input, { target: { value: 'Enter Todo' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        expect(screen.getByText('Enter Todo')).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Toggle Todo' } });
        fireEvent.click(addButton);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        // Note: This test assumes the toggle works; in a real app, you might check for styling or state
        expect(checkbox).toBeChecked();
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Delete Todo' } });
        fireEvent.click(addButton);

        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Delete Todo')).not.toBeInTheDocument();
    });
});
