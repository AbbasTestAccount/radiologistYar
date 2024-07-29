import './Learning.css'
import TreeView from '../TreeView';
import React from "react";
import Test from './Test';
import SplitPane from "react-split-pane";



function Learning() {
  return (
    <div id='learning-page' className="content-below-toolBar">
      <SplitPane split="vertical" minSize={200} defaultSize={300} maxSize={600}>
        <TreeView></TreeView>
        <div className='learning-content'>
          <Test></Test>
        </div>
      </SplitPane>
    </div>
  );
}

export default Learning;
