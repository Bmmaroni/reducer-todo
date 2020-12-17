import React, { useState } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { initialState, todoReducer, ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED} from './reducers/todoReducer';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => dispatch({type: ADD_TODO, payload: todo });
  const toggleTodo = (id) => dispatch({type: TOGGLE_TODO, payload: id});
  const clearCompleted = () => dispatch({type: CLEAR_COMPLETED});

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoList todos={state.todos} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
