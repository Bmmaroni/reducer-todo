import React from 'react';

export const Todo = (props) => {
  return (
    <div
      onClick={props.toggleTodo(props.todo.id)}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      {props.todo.item}
    </div>
  );
};