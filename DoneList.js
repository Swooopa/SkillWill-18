import React from 'react';
import TodoItem from './TodoItem';

const DoneList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default DoneList;
