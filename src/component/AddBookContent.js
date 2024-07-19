import './AddBookContent.css'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, {useEffect, useState} from "react";


import 'ckeditor5/ckeditor5.css';



const handleCKEditorState = (event, editor, setBookData) => {
  const editorData = editor.getData();
  setBookData(editorData);
}

function AddBookContent() {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {  // no need to check

    window.addEventListener('error', e => {
      if (e.message.startsWith('ResizeObserver loop')) {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        );
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    });
  }, []);

  useEffect(() => {
    console.log("bookData : ", bookData);
  }, [bookData]);

  return (
    <div className="add-book-content">
      <CKEditor
        editor={ClassicEditor}
        onInit={editor => { }}
        onChange={(event, editor) => handleCKEditorState(event, editor, setBookData)}
      />
    </div>
  );
}

export default AddBookContent;
