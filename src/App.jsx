import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className='container'>
      <h1 className='header'>Todo List App</h1>
      <AddTodo />
      <FilterTodo />
      <TodoList />
    </div>
  );
};

export default App;
