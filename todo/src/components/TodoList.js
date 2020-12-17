import React from 'react';
import Todo from './Todo';

export const TodoList = (props) => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  )
}