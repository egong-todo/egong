import React from 'react';
import './Todo.css';

function Todo() {
  return (
    <div className ="TodoBack">
      <div className ="Todobox">
        <div className ="Headerbox"></div>
        <div className ="Todocontainer">
          <div className ="Listbox">
            <div className ="Itembox"></div>
            <div className ="Itembox"></div>
            <div className ="Itembox"></div>
            <div className ="Itembox"></div>
            <div className ="Itembox"></div>
          </div>
          <div className ="editbox"></div>
        </div>
      </div>
    </div>
  );
}
export default Todo;