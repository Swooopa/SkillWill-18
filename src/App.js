import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import DoneList from './DoneList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const doneTodos = todos.filter((todo) => todo.completed);
  const remainingTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h1>TODO აპლიკაცია</h1>
      <TodoForm addTodo={addTodo} />
      <h2>არსებული დასავლეთი:</h2>
      <TodoList todos={remainingTodos} onDelete={deleteTodo} onToggle={toggleTodo} />
      <h2>Done:</h2>
      <DoneList todos={doneTodos} />
    </div>
  );
};

export default App;
