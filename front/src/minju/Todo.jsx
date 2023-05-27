import React from 'react';
import './Todo.css';

function Todo() {
  return (
    <div className ="TodoBack">
      <div className ="Todobox">
        <div className ="Headerbox">
          <p className = "Header">할 일 목록</p>
        </div>
        <div className ="Todocontainer">
          <div className ="Listbox">
            <div className ="Itembox">
              <div className='Item'>
                <p className="Inputtext">할 일을 입력하세요.</p>
              </div>
            </div>
            <div className ="Itembox">
              <div className='Item'>
                <div className="Checkbox">
                  <img src="asset/CheckMark.png" alt="CheckMark"/>
                </div>
              </div>
            </div>
            <div className ="Itembox">
              <div className='Item'>
                <div className="Checkbox"></div>
              </div>
            </div>
            <div className ="Itembox">
              <div className='Item'>
                <div className="Checkbox"></div>
              </div>
            </div>
            <div className ="Itembox">
              <div className='Item'>
                <div className="Checkbox"></div>
              </div>
            </div>
            <div className ="Itembox">
              <div className='Item'>
                <div className="Checkbox"></div>
              </div>
            </div>
          </div>
          <div className ="Editbox">
            <div className="Editbutton"></div>
            <div className="Editbutton"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;