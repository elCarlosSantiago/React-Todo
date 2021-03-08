import React from 'react';

function Todo(props) {
  const { todo, toggleTodo } = props;
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      className={`todo${todo.completed ? ' completed' : ''}`}>
      <p>{todo.task}</p>
    </div>
  );
}

export default Todo;
