import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>წაშლა</button>
    </div>
  );
};

export default TodoItem;
