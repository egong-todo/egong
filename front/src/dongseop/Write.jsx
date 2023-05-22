import React from "react";
import "./Write.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Write = () => (
  <div className="Write">
    <h1 className="main_title">게시판</h1>
    <div className="square">
      <div className="title">
        제목{" "}
        <input
          type="text"
          id="title_txt"
          name="title"
          placeholder="제목"
          className="title_box"
        />
        <hr className="title_hr" />
      </div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
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

      <div className="submit_btn">
        <button type="submit">저장</button>&nbsp;&nbsp;
        <button type="submit">취소</button>&nbsp;&nbsp;
      </div>
    </div>
  </div>
);

export default Write;
