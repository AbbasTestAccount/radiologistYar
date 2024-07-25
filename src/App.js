import './App.css';
import ToolBar from "./component/ToolBar";
import Test from './component/Test';
import TreeView from './component/TreeView';
import Learning from './component/Learning';
import AddBookContent from "./component/AddBookContent";
import React, { useEffect, useState } from 'react';

import { Route, Router } from "wouter";

function App() {
  return (
    <div className="App">
      <ToolBar></ToolBar>

      {/* todo: Add routing */}

      <Router>
        <Route path='/config' component={Test}></Route>
        <Route path='/settings' component={Learning}></Route>
        <Route path='/attention' component={AddBookContent}></Route>

      </Router>
      

    </div>
  );
}

export default App;
