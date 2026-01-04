import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from './types';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  // Environment variables with defaults
  const appTitle = process.env.REACT_APP_APP_TITLE || 'Todo App';
  const enableDebugMode = process.env.REACT_APP_ENABLE_DEBUG_MODE === 'true';
  const maxTodos = parseInt(process.env.REACT_APP_MAX_TODOS || '100', 10);

  const addTodo = () => {
    if (input.trim()) {
      if (todos.length >= maxTodos) {
        alert(`Maximum ${maxTodos} todos allowed`);
        return;
      }
      const newTodo: Todo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>{appTitle}</h1>
      {enableDebugMode && (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '10px', fontSize: '12px' }}>
          <strong>Debug Info:</strong><br />
          Total Todos: {todos.length}<br />
          Completed: {todos.filter(t => t.completed).length}<br />
          Environment: {process.env.NODE_ENV}
        </div>
      )}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}        
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;