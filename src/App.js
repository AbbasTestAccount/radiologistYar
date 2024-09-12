import './App.css';
import ToolBar from "./component/ToolBar";
import Diagnosis from './component/Pages/Diagnosis';
import Learning from './component/Pages/Learning';
import AddBookContent from "./component/AddBookContent";
import Home from "./component/Pages/Home";
import LearningPdfStyle from "./component/Pages/LearningPdfStyle"
import Login from './component/Pages/Login';
import React, { useEffect, useState } from 'react';
import AnalyticsMenu from "./component/Analytics/AnalyticsMenu";
import AnalyticsPage from './component/Analytics/AnalyticsPage';

import { Route, Router } from "wouter";
import Profile from './component/Pages/Profile';
import Cookies from 'js-cookie';


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

  const userFromCookie = Cookies.get('user')
  if (userFromCookie) {
    const user = JSON.parse(userFromCookie);
    console.error("userrrrrrr : ", user);    
  }
  

  return (
    <div className="App">
      <ToolBar></ToolBar>

      {/* todo: Add routing */}
      <div id='content-under-toolBar'>
        <Router>
          <Route path='/' component={Home}></Route>
          <Route path='/diagnosis' component={Diagnosis}></Route>
          {/* <Route path='/bookContent'>
            <Learning browserHeight={browserHeight} ></Learning>
          </Route> */}
          
          <Route path='/addContent' component={AddBookContent}></Route>
          <Route path='/bookContentPdf' component={LearningPdfStyle}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path="/profile" component={Profile} />
          <Route path="/analytics" component={AnalyticsMenu} />

          <Route path="/analytics/:chart">
            <AnalyticsPage/>
          </Route>
          

        </Router>
      </div>
    </div>
  );
}

export default App;
