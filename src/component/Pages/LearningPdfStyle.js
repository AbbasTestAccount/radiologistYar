import './Learning.css'
import TreeView from '../TreeView';
import React, { useEffect, useRef } from "react";
import PdfViewer from './PdfViewer';
import SplitPane from "react-split-pane";

function Learning(props) {
  const pdfViewerRef = useRef(null);

  useEffect(() => {
    const topBar = document.getElementById('topBar');
    const topBarRect = topBar.getBoundingClientRect();
    const panes = document.getElementsByClassName('Pane');
    
    if (panes[0] && panes[1]) {
      console.error("----------------------");
      
      panes[0].style.height = `calc(100vh - ${topBarRect.y + topBar.offsetHeight}px)`;
      panes[1].style.height = `calc(100vh - ${topBarRect.y + topBar.offsetHeight}px)`;
    }

    const splitPane = document.getElementsByClassName('SplitPane')[0];
    if (splitPane) {
      splitPane.style.height = '';
    }
  }, [props.browserHeight]);

  const handleDragStarted = () => {
    // Disable pointer events on iframe during dragging
    if (pdfViewerRef.current) {
      pdfViewerRef.current.style.pointerEvents = 'none';
    }
  };

  const handleDragFinished = () => {
    // Re-enable pointer events on iframe after dragging
    if (pdfViewerRef.current) {
      pdfViewerRef.current.style.pointerEvents = 'auto';
    }
  };

  return (
    <div id='learning-page' className="content-below-toolBar">
      <SplitPane
        split="vertical"
        minSize={200}
        defaultSize={300}
        maxSize={600}
        onDragStarted={handleDragStarted}
        onDragFinished={handleDragFinished}
      >
        <TreeView />
        <div className='learning-content' ref={pdfViewerRef}>
          <PdfViewer />
        </div>
      </SplitPane>
    </div>
  );
}

export default Learning;
