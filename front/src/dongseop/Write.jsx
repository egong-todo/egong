import React from "react";
import "./Write.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Write = () => (
  <div className="Write">
    <h1 className="main_title">게시판</h1>
    <div className="square">
      <div className="title">
        <div className="name">제목</div>
        <input
          type="text"
          id="title_txt"
          name="title"
          placeholder="제목"
          className="title_box"
        />
      </div>
      <hr className="title_hr" />
      <div className="editor_limit_box">
        <div className="content">내용</div>
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data="<p>여기에 내용을 입력해주세요.</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </div>
      <hr className="editor_hr" />
      <div className="btnbox">
        <div className="upload">
          <img className="pen" src="./asset/upload.png" alt="연필" />
          <p className="text_upload">등록</p>
        </div>

        <div className="list_btn">
          <img className="list" src="./asset/list.png" alt="리스트" />
          <p className="text_list">목록</p>
        </div>
      </div>
    </div>
  </div>
);

export default Write;
