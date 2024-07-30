import './Learning.css'
import TreeView from '../TreeView';
import React, { useEffect } from "react";
import PdfViewer from './PdfViewer';
import SplitPane from "react-split-pane";



function Learning(props) {
  useEffect(()=>{
    const topBar = document.getElementById('topBar')
    const topBarRect = topBar.getBoundingClientRect()
    document.getElementsByClassName('Pane')[0].style.height = `calc(100vh - ${topBarRect.y + topBar.offsetHeight}px)`
    document.getElementsByClassName('Pane')[1].style.height = `calc(100vh - ${topBarRect.y + topBar.offsetHeight}px)`
    document.getElementsByClassName('SplitPane')[0].style.height = ''
  }, [props.browserHeight])

  return (
    <div id='learning-page' className="content-below-toolBar">
      <SplitPane split="vertical" minSize={200} defaultSize={300} maxSize={600}>
        <TreeView></TreeView>
        <div className='learning-content'>
          <PdfViewer></PdfViewer>
        </div>
      </SplitPane>
    </div>
  );
}

export default Learning;
