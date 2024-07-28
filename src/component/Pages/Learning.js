import './Learning.css'
import TreeView from '../TreeView';
import React from "react";
import Test from './Test';


function Learning() {
  return (
    <div id='learning-page' className="content-below-toolBar">
        <TreeView></TreeView>
        <div className='learning-content'>
          <Test></Test>
        </div>

    </div>
  );
}

export default Learning;
