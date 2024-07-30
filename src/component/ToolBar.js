import React, { useEffect, useState } from 'react';
import './ToolBar.css';

const ToolBar = (props)=>{

  const [showMenuHome, setShowMenuHome] = useState(false);
  const [showMenuConfig, setShowMenuConfig] = useState(false);
  const [showMenuAddContent, setShowMenuAddContent] = useState(false);
  const [showMenuBookContentPdf, setShowMenuBookContentPdf] = useState(false);
  const [showMenuBookContent, setShowMenuBookContent] = useState(false);

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
      
      case 'config':
        setShowMenuConfig(showStatus);
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
    
      default:
        break;
    }
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
  
  const handleMenuItemClick = () => {                         ///todo///
    // Handle menu item click actions here
    setShowMenuHome(false);
  };

  useEffect(()=>{
    const topBar = document.getElementById('topBar')
    const topBarRect = topBar.getBoundingClientRect()

    if (showMenuHome) {
      const home = document.getElementById('home')
      const homeRect = home.getBoundingClientRect()
  
      setMenuPosition({x: window.innerWidth-homeRect.right, y: (topBarRect.y+topBar.offsetHeight)})

    }else if (showMenuConfig) {
      const config = document.getElementById('config')
      const configRect = config.getBoundingClientRect()
  
      setMenuPosition({x: window.innerWidth-configRect.right, y: (topBarRect.y+topBar.offsetHeight)})  

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
    }
    
  }, [showMenuHome, showMenuConfig, showMenuAddContent, showMenuBookContentPdf, showMenuBookContent])

  return (
    <div id='toolBar'>
      <div id='logo'> Radiologist Yar</div>
      <ul id='topBar'>
        <li id='home' onMouseEnter={()=>handleMouseEnter('home')} onMouseLeave={()=>{handleMouseLeave('home')}} 
        style={{backgroundColor: showMenuHome? '#202020' : '#333'}}>
          <a href="home"><span className='home'>Home</span></a>
        </li>
        
        <li id='config' onMouseEnter={()=>handleMouseEnter('config')} onMouseLeave={()=>{handleMouseLeave('config')}}
        style={{backgroundColor: showMenuConfig? '#202020' : '#333'}}>
          <a href="config"><span className='config'>Config</span></a>
        </li>
        
        <li id='addContent' onMouseEnter={()=>handleMouseEnter('addContent')} onMouseLeave={()=>{handleMouseLeave('addContent')}}
        style={{backgroundColor: showMenuAddContent? '#202020' : '#333'}}>
          <a href="addContent"><span className='addContent'>اضافه کردن محتوا</span></a>
        </li>
        
        <li id='bookContentPdf' onMouseEnter={()=>handleMouseEnter('bookContentPdf')} onMouseLeave={()=>{handleMouseLeave('bookContentPdf')}}
        style={{backgroundColor: showMenuBookContentPdf? '#202020' : '#333'}}>
          <a href="bookContentPdf"><span className='bookContentPdf'>Educational content(pdf)</span></a>
        </li>
        
        <li id='bookContent' onMouseEnter={()=>handleMouseEnter('bookContent')} onMouseLeave={()=>{handleMouseLeave('bookContent')}}
        style={{backgroundColor: showMenuBookContent? '#202020' : '#333'}}>
          <a href="bookContent"><span className='bookContent'>Educational content(html)</span></a>
        </li>
        
        <li className="left-float"><a className="green-tab" href="about"><span className='account'>Account</span></a></li>
      </ul>
        {showMenuHome && ( 
          
          <ul className="contextMenuToolBar" onMouseEnter={()=>handleMouseEnterContextMenu('home')}  onMouseLeave={()=>handleMouseLeaveContextMenu('home')} style={{ top: `${menuPosition.y}px`, right: `${menuPosition.x}px` }}>
            <li className="menuItem" onClick={handleMenuItemClick}>item1</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item2</li>
            <li className="menuItem" onClick={handleMenuItemClick}>item3</li>
          </ul>
        )}
        
        {showMenuConfig && (
          <ul className="contextMenuToolBar" onMouseEnter={()=>handleMouseEnterContextMenu('config')} onMouseLeave={()=>handleMouseLeaveContextMenu('config')} style={{ top: `${menuPosition.y}px`, right: `${menuPosition.x}px` }}>
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
        )}
    </div>

  );
}

export default ToolBar;