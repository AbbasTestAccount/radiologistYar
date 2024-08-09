import './Learning.css'
import TreeView from '../TreeView';
import React, { useEffect, useRef, useState } from "react";
import PdfViewer from './PdfViewer';
import SplitPane from "react-split-pane";

function Learning(props) {
  const [pdfLink, setPdfLink] = useState('')
  const pdfViewerRef = useRef(null);

  useEffect(() => {
    const topBar = document.getElementById('topBar');
    const topBarRect = topBar.getBoundingClientRect();
    const panes = document.getElementsByClassName('Pane');
    
    if (panes[0] && panes[1]) {      
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

  const hideContextMenu = (name) => {
    const contextMenu = document.getElementById(name);
  
    if (contextMenu) {
      contextMenu.style.display = 'none';
    }
    
    const activeItems = document.querySelectorAll('.context-menu-active');
    activeItems.forEach(item => item.classList.remove('context-menu-active'));
  };
  
  return (
    <div id='learning-page' className="content-below-toolBar">
      <div id="BookReference-class-ContextMenu" style={{ display: 'none', position: 'absolute' }}>
        <ul className="treeViewContextMenuUl">
        <li className="treeViewContextMenuItem contextMenuItem" onClick={()=> {
          hideContextMenu('BookReference-class-ContextMenu');
        }}>Item 1</li>
        <li className="treeViewContextMenuItem contextMenuItem" onClick={() => {
            hideContextMenu('BookReference-class-ContextMenu');
        }}>Item 2</li>
        <li className="lastTreeViewContextMenuItem contextMenuItem" onClick={() => {
            hideContextMenu('BookReference-class-ContextMenu');
        }}>Item 3</li>

        </ul>
      </div>
      <SplitPane
        split="vertical"
        minSize={300}
        defaultSize={440}
        maxSize={600}
        onDragStarted={handleDragStarted}
        onDragFinished={handleDragFinished}
      >
        <TreeView setPdfLink={setPdfLink} hideContextMenu={hideContextMenu} />
        <div className='learning-content' ref={pdfViewerRef}>
          <PdfViewer />
        </div>
      </SplitPane>
    </div>
  );
}

export default Learning;
