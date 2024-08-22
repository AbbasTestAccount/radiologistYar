import React, { useEffect, useState } from 'react';
import './ToolBar.css';

const ToolBar = (props)=>{

  const [showMenuHome, setShowMenuHome] = useState(false);
  const [showMenuDiagnosis, setShowMenuDiagnosis] = useState(false);
  const [showMenuAddContent, setShowMenuAddContent] = useState(false);
  const [showMenuBookContentPdf, setShowMenuBookContentPdf] = useState(false);
  const [showMenuBookContent, setShowMenuBookContent] = useState(false);
  const [showMenuAccountContent, setShowMenuAccountContent] = useState(false);
  
  

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });


  useEffect(()=>{
    // const logo = document.getElementById('logo')
    // const toolBar = document.getElementById('toolBar')
    // const toolBarHeight = toolBar.clientHeight ;

    // logo.style.lineHeight = `${toolBarHeight}px`
    // logo.style.height = `${toolBarHeight}px`;
  }, [])

  const setShowMenuSwitch = (menuItem, showStatus)=>{
    switch (menuItem) {
      case 'home':
        setShowMenuHome(showStatus);
        break;
      
      case 'diagnosis':
        setShowMenuDiagnosis(showStatus);
        break;

      case 'addContent':
        setShowMenuAddContent(showStatus);
        break;

      case 'bookContentPdf':
        setShowMenuBookContentPdf(showStatus);
        break;

      case 'bookContent':
        setShowMenuBookContent(showStatus);
        break;
      
      case 'accountContent':
        setShowMenuAccountContent(showStatus);
        break;
    
      default:
        break;
    }
  }

  const handleSignupItemClick = ()=>{

  }

  const handleLoginItemClick = ()=>{
    
  }

  const handleMouseEnter = (menuItem) => {
    setShowMenuSwitch(menuItem, true)
  };

  const handleMouseLeave = (menuItem) => {
    setShowMenuSwitch(menuItem, false)
  };

  const handleMouseEnterContextMenu = (menuItem) => {
    setShowMenuSwitch(menuItem, true)
  };
  
  const handleMouseLeaveContextMenu = (menuItem) => {
    setShowMenuSwitch(menuItem, false)
  };
  

  useEffect(()=>{
    const topBar = document.getElementById('topBar')
    const topBarRect = topBar.getBoundingClientRect()

    if (showMenuHome) {
      const home = document.getElementById('home')
      const homeRect = home.getBoundingClientRect()
  
      setMenuPosition({x: window.innerWidth-homeRect.right, y: (topBarRect.y+topBar.offsetHeight)})

    }else if (showMenuDiagnosis) {
      const diagnosis = document.getElementById('diagnosis')
      const diagnosisRect = diagnosis.getBoundingClientRect()
  
      setMenuPosition({x: window.innerWidth-diagnosisRect.right, y: (topBarRect.y+topBar.offsetHeight)})  

    }else if (showMenuAddContent) {
      const addContent = document.getElementById('addContent')
      const addContentRect = addContent.getBoundingClientRect()
  
      setMenuPosition({x: window.innerWidth-addContentRect.right, y: (topBarRect.y+topBar.offsetHeight)})  

    }else if (showMenuBookContentPdf) {
      const bookContentPdf = document.getElementById('bookContentPdf')
      const bookContentPdfRect = bookContentPdf.getBoundingClientRect()
  
      setMenuPosition({x: window.innerWidth-bookContentPdfRect.right, y: (topBarRect.y+topBar.offsetHeight)})  

    }else if (showMenuBookContent) {
      const bookContent = document.getElementById('bookContent')
      const bookContentRect = bookContent.getBoundingClientRect()
  
      setMenuPosition({x: window.innerWidth-bookContentRect.right, y: (topBarRect.y+topBar.offsetHeight)})  
    }else if (showMenuAccountContent) {
      const accountContent = document.getElementById('accountContent')
      const accountContentRect = accountContent.getBoundingClientRect()
  
      setMenuPosition({ x: accountContentRect.left, y: (topBarRect.y + topBar.offsetHeight) });
    }
    
    
  }, [showMenuHome, showMenuDiagnosis, showMenuAddContent, showMenuBookContentPdf, showMenuBookContent, showMenuAccountContent])

  return (
    <div>
      <div id='toolBar'>
        <div id='logo'> Radiologist Yar</div>
        <ul id='topBar'>
          <li id='home' onMouseEnter={()=>handleMouseEnter('home')} onMouseLeave={()=>{handleMouseLeave('home')}} 
          style={{backgroundColor: showMenuHome? '#202020' : '#333'}}>
            <a href="home"><span className='home'>Home</span></a>
          </li>
          
          <li id='diagnosis' onMouseEnter={()=>handleMouseEnter('diagnosis')} onMouseLeave={()=>{handleMouseLeave('diagnosis')}}
          style={{backgroundColor: showMenuDiagnosis? '#202020' : '#333'}}>
            <a href="diagnosis"><span className='diagnosis'>Diagnosis</span></a>
          </li>
          
          <li id='addContent' onMouseEnter={()=>handleMouseEnter('addContent')} onMouseLeave={()=>{handleMouseLeave('addContent')}}
          style={{backgroundColor: showMenuAddContent? '#202020' : '#333'}}>
            <a href="addContent"><span className='addContent'>Add Content</span></a>
          </li>
          
          <li id='bookContentPdf' onMouseEnter={()=>handleMouseEnter('bookContentPdf')} onMouseLeave={()=>{handleMouseLeave('bookContentPdf')}}
          style={{backgroundColor: showMenuBookContentPdf? '#202020' : '#333'}}>
            <a href="bookContentPdf"><span className='bookContentPdf'>Educational content(pdf)</span></a>
          </li>
          
          <li id='bookContent' onMouseEnter={()=>handleMouseEnter('bookContent')} onMouseLeave={()=>{handleMouseLeave('bookContent')}}
          style={{backgroundColor: showMenuBookContent? '#202020' : '#333'}}>
            <a href="bookContent"><span className='bookContent'>Educational content(html)</span></a>
          </li>
          
          <li id='accountContent' className="left-float"
            onMouseEnter={()=>handleMouseEnter('accountContent')} onMouseLeave={()=>{handleMouseLeave('accountContent')}}
            style={{backgroundColor: showMenuAccountContent? '#04AA6D' : '#333'}}>
            <a className="green-tab" href="accountContent"><span className='accountContent'>Account</span></a>
          </li>
        </ul>

      </div>
{/* 
      {showMenuHome && ( 
          
          <ul className="contextMenuToolBar" onMouseEnter={()=>handleMouseEnterContextMenu('home')}  onMouseLeave={()=>handleMouseLeaveContextMenu('home')} style={{ top: `${menuPosition.y}px`, right: `${menuPosition.x}px` }}>
            <li className="menuItem" onClick={handleMenuItemClick}>item1</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item2</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item3</li>
          </ul>
        )}
        
        {showMenuDiagnosis && (
          <ul className="contextMenuToolBar" onMouseEnter={()=>handleMouseEnterContextMenu('diagnosis')} onMouseLeave={()=>handleMouseLeaveContextMenu('diagnosis')} style={{ top: `${menuPosition.y}px`, right: `${menuPosition.x}px` }}>
            <li className="menuItem" onClick={handleMenuItemClick}>item1</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item2</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item3</li>
          </ul>
        )}
        
        {showMenuAddContent && (
          <ul className="contextMenuToolBar" onMouseEnter={()=>handleMouseEnterContextMenu('addContent')} onMouseLeave={()=>handleMouseLeaveContextMenu('addContent')} style={{ top: `${menuPosition.y}px`, right: `${menuPosition.x}px` }}>
            <li className="menuItem" onClick={handleMenuItemClick}>item1</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item2</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item3</li>
          </ul>
        )}      
        
        {showMenuBookContentPdf && (
          <ul className="contextMenuToolBar" onMouseEnter={()=>handleMouseEnterContextMenu('bookContentPdf')} onMouseLeave={()=>handleMouseLeaveContextMenu('bookContentPdf')} style={{ top: `${menuPosition.y}px`, right: `${menuPosition.x}px` }}>
            <li className="menuItem" onClick={handleMenuItemClick}>item1</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item2</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item3</li>
          </ul>
        )}
              
        {showMenuBookContent && (
          <ul className="contextMenuToolBar" onMouseEnter={()=>handleMouseEnterContextMenu('bookContent')} onMouseLeave={()=>handleMouseLeaveContextMenu('bookContent')} style={{ top: `${menuPosition.y}px`, right: `${menuPosition.x}px` }}>
            <li className="menuItem" onClick={handleMenuItemClick}>item1</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item2</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item3</li>
          </ul>
        )} */}
        {showMenuAccountContent && (
          <ul className="contextMenuToolBar" onMouseEnter={() => handleMouseEnterContextMenu('accountContent')} onMouseLeave={() => handleMouseLeaveContextMenu('accountContent')} style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}>
            <a href="signup" style={{textDecoration: 'inherit', color:'inherit'}}><li className="menuItem">SignUp</li></a>
            <a href="login" style={{textDecoration: 'inherit', color:'inherit'}}><li className="menuItem">LogIn</li></a>
          </ul>
        )}

    </div>
    

  );
}

export default ToolBar;