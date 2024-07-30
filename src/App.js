import './App.css';
import ToolBar from "./component/ToolBar";
import Test from './component/Pages/Test';
import Learning from './component/Pages/Learning';
import AddBookContent from "./component/AddBookContent";
import Home from "./component/Pages/Home";
import LearningPdfStyle from "./component/Pages/LearningPdfStyle"
import React, { useEffect, useState } from 'react';

import { Route, Router } from "wouter";

function App() {
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight)


  useEffect(()=>{
    const topBar = document.getElementById('topBar')
    const topBarRect = topBar.getBoundingClientRect()
    document.getElementById('content-under-toolBar').style.paddingTop = `${topBarRect.y+topBar.offsetHeight}px`
    
    
  },[browserHeight])

  useEffect(() => {
    const handleResize = () => {
      setBrowserHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  


  return (
    <div className="App">
      <ToolBar></ToolBar>

      {/* todo: Add routing */}
      <div id='content-under-toolBar'>
        <Router>
          <Route path='/home' component={Home}></Route>
          <Route path='/config' component={Test}></Route>
          <Route path='/bookContent'>
            <Learning browserHeight={browserHeight} ></Learning>
          </Route>
          <Route path='/addContent' component={AddBookContent}></Route>
          <Route path='/logs' component={LearningPdfStyle}></Route>

        </Router>
      </div>

      
      

    </div>
  );
}

export default App;
