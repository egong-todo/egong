import React from 'react';
import './Todo.css';
import Header from "./component/Header";
import Todolist from "./component/Todolist";

function Todo() {
  return (
    <div className ="TodoBack">
      <div className="Todo">
        <Header/>
        <Todolist/>
      </div>
    </div>
  );
}
export default Todo;