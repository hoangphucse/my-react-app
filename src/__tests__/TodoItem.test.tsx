import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../TodoItem';
import { Todo } from '../types';

const mockTodo: Todo = {
    id: 1,
    text: 'Test Todo',
    completed: false,
};

const mockOnToggle = jest.fn();
const mockOnDelete = jest.fn();

describe('TodoItem', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders todo text', () => {
        render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
        expect(screen.getByText('Test Todo')).toBeInTheDocument();
    });

    test('calls onToggle when checkbox is clicked', () => {
        render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockOnToggle).toHaveBeenCalledWith(1);
    });

    test('calls onDelete when delete button is clicked', () => {
        render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(mockOnDelete).toHaveBeenCalledWith(1);
    });

    test('strikes through text when completed', () => {
        const completedTodo = { ...mockTodo, completed: true };
        render(<TodoItem todo={completedTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
        const text = screen.getByText('Test Todo');
        expect(text).toHaveStyle('text-decoration: line-through');
    });
});
