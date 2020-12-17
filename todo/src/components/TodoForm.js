import React, { useState } from 'react';

const TodoForm = (props) => {

  const [newTodo, setNewTodo] = useState();

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={submitForm}>
      <input 
        type='text'
        name='item'
        value={newTodo}
        onChange={handleChanges}
      />
      <button>Add</button>
      <button onClick={() => props.clearCompleted()}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;