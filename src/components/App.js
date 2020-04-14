import React from 'react';
import './App.css';
import Form from './Form'
import TodoList from './TodoList'
import Filter from './Filter'

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <Form />
      <TodoList />
      <Filter />
    </>
  );
}

export default App;
