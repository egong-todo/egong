import React from 'react';
import './Reads.css';

function Reads(){
  return(
    <div className='Readback'>
      <div className= "boardbox1">
        <p className='header'>게시판!</p>
      </div>
      <div className="boardbox2">
        <div className="ReadContainer">
          <div className="postbox">
            <div className="titlebox">
             <p className='title'>내 인생...</p>
            </div>
            <div className="userbox">
              <img className="Usericon" alt="user" src="asset/user.png" />
              <p className='username'> 킴교수</p>
            </div>
            <div className="readbox">
              <div className="detailbox">
                  <div className="datebox">
                    <img className="time" alt="time" src="asset/time.png" />
                    <p className='uploaddate'> 시간 </p>
                  </div>
                <div className="writebox">
                   <p className='write'> 내용 아메리카노 먹고 싶다.</p>
                </div>
              </div> 
              <div className="buttonbox">
                <div className="button">
                  <img className="icon" alt="category" src="asset/category.png" />
                  <p className='buttontext'> 목록 </p>
                </div>
                <div className="button">
                  <img className="icon" alt="pencil" src="asset/pencil.png"/>
                  <p className='buttontext'>수정 </p>
                </div>
                <div className="button">
                  <img className="icon" alt="delete" src="asset/delete.png" />
                  <p className='buttontext'>삭제 </p> 
                </div>
              </div>
            </div>
          </div>
          <div className="commentbox"></div>   
        </div>  
      </div>
    </div>
    );
}

export default Reads;