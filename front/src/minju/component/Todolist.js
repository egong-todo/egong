import React from 'react';
import './Todolist.css';
import TodoItem from './TodoItem';

const Todolist = () => {
  return(
    <div className="Todolist">
        <div classname="list_wrapper">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    </div>
  );
};
export default Todolist;