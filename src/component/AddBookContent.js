import './AddBookContent.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import 'ckeditor5/ckeditor5.css';

const handleCKEditorState = (event, editor, setBookData) => {
  const editorData = editor.getData();
  setBookData(editorData);
}

const checkNotNullContent = (bookData)=>{
  if (bookData) {
    return true
  }else{
    alert('content is null !!!')
    return false
  }

}

function AddBookContent() {
  const [bookData, setBookData] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    console.log("bookData : ", bookData);
  }, [bookData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!checkNotNullContent(bookData)){
      return;
    }
    console.error(editorRef.current); // Check if the editor instance is set

    if (editorRef.current) {
      editorRef.current.setData(''); // Clear the CKEditor content
    }
    setBookData(null); // Clear state

    try {
      const response = await axios.post('YOUR_SERVER_ENDPOINT', {
        content: bookData,
      });

      if (response.status === 200) {
        console.log('Content submitted successfully!');
        if (editorRef.current) {
          editorRef.current.setData(''); // Clear the CKEditor content
        }
        setBookData(null); // Clear state
      } else {
        console.error('Failed to submit content');
      }
    } catch (error) {
      console.error('Error submitting content:', error);
    }
  };

  return (
    <div className="add-book-content content-below-toolBar">
      <form onSubmit={handleSubmit}>
        <CKEditor
          editor={ClassicEditor}
          onInit={editor => {
            editorRef.current = editor; // Assign the editor instance to the ref
          }}
          onChange={(event, editor) => handleCKEditorState(event, editor, setBookData)}
        />
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBookContent;
