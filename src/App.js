import './App.css';
import ToolBar from "./component/ToolBar";
import Test from './component/Pages/Test';
import Learning from './component/Pages/Learning';
import AddBookContent from "./component/AddBookContent";
import Home from "./component/Pages/Home";
import React, { useEffect, useState } from 'react';

import { Route, Router } from "wouter";

function App() {
  return (
    <div className="App">
      <ToolBar></ToolBar>

      {/* todo: Add routing */}

      <Router>
        <Route path='/home' component={Home}></Route>
        <Route path='/config' component={Test}></Route>
        <Route path='/bookContent' component={Learning}></Route>
        <Route path='/addContent' component={AddBookContent}></Route>

      </Router>
      

    </div>
  );
}

export default App;
