import React from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import './TreeView.css'
import { unstable_useTreeItem2 as useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2GroupTransition,
  TreeItem2Label,
  TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';

import {forwardRef} from 'react'
// import Icon from './Icon';

import { useEffect, useState, Fragment } from 'react';
import {itemList} from './Lists/TreeViewList';

function addUniqueIds(items) {
  let idCounter = 0;

  function assignId(item) {
      item.id = idCounter.toString();
      idCounter++;

      if (item.children && item.children.length > 0) {
          item.children.forEach(assignId);
      }
  }

  items.forEach(assignId);

  return items
}

var ITEMS = addUniqueIds(itemList);

var itemArray = [];


function isNewItem(element, itemArray) {
  for (let index = 0; index < itemArray.length; index++) {
    if (itemArray[index] == element) {
      return false;
    }
  }
  return true
  
}

function getAllItems(jsonFile) {
  for (let index = 0; index < jsonFile.length+1; index++) {
    if (index == jsonFile.length) {
      return itemArray;
    } else {
      const element = jsonFile[index];
      if (element.children) {
        getAllItems(element.children)           
      }
      if(isNewItem(element, itemArray)){
        itemArray.push(element)

      }
    }
      
  }
}

function getType(id) {
  for (let index = 0; index < itemArray.length; index++) {
    const element = itemArray[index];
    if (id === element.id) {
      return itemArray[index].type.concat("-class")
    }
  }
  return 'undifined-class';
}

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  padding: theme.spacing(0.5, 1)
}));


const CustomTreeItem = forwardRef(function CustomTreeItem(props, ref) {
  
  const { id, itemId, label, disabled, children, ...other } = props;


  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  return (
    <TreeItem2Provider itemId={itemId}>
      <TreeItem2Root {...getRootProps(other)} className='tessttt' sx={(theme)=>({
          borderLeft: `1px double ${alpha(theme.palette.text.primary, 0.3)}`,
          marginLeft: 0.8,
          paddingLeft: 0,
          borderTopLeftRadius:0,
          borderBottomLeftRadius:0
      })}>
        <CustomTreeItemContent {...getContentProps()} className={getType(itemId) + ' treeViewItem'} id={itemId}>
          <TreeItem2IconContainer {...getIconContainerProps()} className='asasa'>
            <TreeItem2Icon status={status}/>
          </TreeItem2IconContainer>
          {/* wait for value */}
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
            {/* <Icon label={label} jsonFile={itemArray}></Icon> */}
            

            {/* <Avatar
              sx={(theme) => ({
                // background: theme.palette.primary.main,
                width: 24,
                height: 24,
                fontSize: '0.8rem',
              })}
            >
            </Avatar> */}
            <TreeItem2Label {...getLabelProps()} />
          </Box>
        </CustomTreeItemContent>
        <TreeItem2GroupTransition {...getGroupTransitionProps()} />
        {/* {children && <TreeItem2GroupTransition {...getGroupTransitionProps()} />} */}
      </TreeItem2Root>
    </TreeItem2Provider>
  );
})


const removeHeightFromElements = () => {
  const elements = document.querySelectorAll('.css-1x65hva');
  elements.forEach(element => {
    console.error("000000000000000000000000000");
    element.style.height = '';
  });
};

const TreeView = (props)=> {
  const hideContextMenu = props.hideContextMenu

  const [hoverdItem, setHoverdItem] = useState('');
  const [contextMenuElement, setContextMenuElement] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);
  const [items, setItems] = useState(ITEMS)


  function addDashLine() {
    const emptyElements = document.getElementsByClassName('css-19d0qwr-MuiTreeItem2-iconContainer')
    for (let index = 0; index < emptyElements.length; index++) {
      const element = emptyElements[index];
      if (element.innerHTML === '') {
        element.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <line x1="4" y1="12" x2="20" y2="12" stroke="wheat" stroke-width="2"></line>
                             </svg>`
      }
    }
  }

  const initEventListener = ()=>{
    initEventListenerWithName('BookReference-class')
  }

  useEffect(()=>{
    if (contextMenuElement !== '' && hoverdItem !== '') {
      if (contextMenuElement !== hoverdItem) {
        hideContextMenu('BookReference-class-ContextMenu')
      }
    }

  }, [contextMenuElement, hoverdItem])

  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);

    setTimeout(() => {
      addDashLine();
      initEventListener()
      
    }, 0);    
  };

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside);

    setTimeout(() => {
      addDashLine();
      initEventListener()
    }, 100);

    getAllItems(ITEMS)
    
    setTimeout(() => {
      addDashLine();
      initEventListener();
      removeHeightFromElements();
    }, 1000);

  }, [])

  function initEventListenerWithName(name) {
    const elementClass = document.getElementsByClassName(name)
    for (let index = 0; index < elementClass.length; index++) {
      const element = elementClass[index];
      
      element.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
        showContextMenu(name, e, element);
        setContextMenuElement(element.id);
        return false; // Add this line to prevent the default context menu from appearing
    });
    

      element.addEventListener('mouseenter', (e)=>{
        // const hoveredNodeName = e.target.innerText;
        setHoverdItem(element.id)
      })
    }
  }

  const handleClickOutside = (event) => {
    if (!event.target.closest("#BookReference-class-ContextMenu")) {
      hideContextMenu('BookReference-class-ContextMenu')
    }
  };

  const showContextMenu = (name, event, element) => {
    event.preventDefault(); // Prevent the default context menu
  
    const contextMenu = document.getElementById(name.concat('-ContextMenu'));
  
    // Add the 'context-menu-active' class to the hovered TreeViewItem
    element.classList.add('context-menu-active');
    
    // Get the bounding rectangle of the element
    const elementRect = element.getBoundingClientRect();
  
    // Calculate the position relative to the viewport
    const top = elementRect.top + window.scrollY; // Adding scrollY in case of scroll
    const left = elementRect.right + window.scrollX; // Adding scrollX in case of scroll
  
    // Get viewport dimensions
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
  
    // Adjust the position if the context menu overflows the viewport
    const contextMenuHeight = contextMenu.offsetHeight;
    const contextMenuWidth = contextMenu.offsetWidth;
  
    let adjustedTop = top;
    let adjustedLeft = left;
  
    // If the context menu would overflow the bottom of the viewport, adjust it
    if (top + contextMenuHeight > viewportHeight) {
      adjustedTop = viewportHeight - contextMenuHeight;
    }
  
    // If the context menu would overflow the right side of the viewport, adjust it
    if (left + contextMenuWidth > viewportWidth) {
      adjustedLeft = elementRect.left - contextMenuWidth; // Show it on the left side of the element
    }
  
    // Apply the adjusted positions
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${adjustedLeft}px`;
    contextMenu.style.top = `${adjustedTop}px`;
  
    contextMenu.addEventListener('mouseleave', () => {
      element.classList.remove('context-menu-active');
      hideContextMenu('BookReference-class-ContextMenu')
    });
  
    setContextMenuElement(element.id);
  };

  
  
  



  return (

    <Fragment>
      <Box id='tree-view-box' sx={{marginTop:1, height: '-webkit-fill-available', flexGrow: 1 }}>
        <RichTreeView
          aria-label="icon expansion"
          sx={{ position: 'relative' }}
          expandedItems={expandedItems}
          onExpandedItemsChange={handleExpandedItemsChange}
          items={items}
          slots={{ item: CustomTreeItem}} // Pass items as a prop
        />
      </Box>
    </Fragment>
    
  );
}

export default TreeView;