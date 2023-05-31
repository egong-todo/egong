import React from 'react';
import './Todo.css';
import {useState} from 'react';

function Todo() {
  const [toDo,setTodo] = useState("");
  const [toDos,setTodos] = useState([]);
  const onSubmit = (e) => {
      e.preventDefault();
      if(toDo === ""){
          return
      }
      setTodos((currentArray) =>[toDo, ...currentArray])
      setTodo("")
  } 
  const onChange = (e) => {
      setTodo(e.target.value)
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { //입력된 키값 검사
      onSubmit(e);
    }
  }
  return (
    <div className ="TodoBack">
      <div className ="Todobox">
        <div className ="Headerbox">

          <p className = "Header">할 일 목록</p>
          <div className ="GoBoardbutton">
            <img className="GotoIcon" src="asset/Goto.png" alt="GotoIcon"/>
            <p className ="Buttontext">게시판</p>
          </div>
        </div>
        <div className ="Todocontainer">
          <div className ="ListTemplatebox">
            <div className ="Itembox">
              <form onSubmit={onSubmit}>
                <input className="InputItem" type="text" maxLength="200" placeholder="할 일을 입력하세요." onChange={onChange} value={toDo}/>
              </form>  
            </div>
            <div className ="Listbox Scrolltype">
              {toDos.map((item)=>
              <div className ="Itembox">
                <div className='Item'>
                  <div className="Checkbox">
                    <img className="CheckMark" src="asset/CheckMark.png" alt="CheckMark"/>
                  </div>
                  <p className ="Buttontext">{item}</p>
                </div>
              </div>)}
            </div>  
          </div>
          <div className ="Editbox">
            <div className="Editbutton">
             <p className="Buttontext">수정</p>
            </div>
            <div className="Editbutton">
              <p className="Buttontext">삭제</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;