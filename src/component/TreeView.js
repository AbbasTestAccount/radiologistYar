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


var itemArray = [];

var ITEMS = [
  {
    type:'network',
    id: '0',
    label: 'My Network',
    children:[{
      type:'nodes',
      id: '1',
      label: 'Nodes',
      children: [
        {
          type:'node',
          id: '2',
          label: 'TH1',
          children: [
            {
              type:'radios',
              id: '4', 
              label: 'Radios', 
              children:[
                {
                  type:'radio2', id: '5', label: 'radio1'
                },
                {
                  type:'radio2', id: '6', label: 'radio2'
                }
              ]
            },
          ],
        },
        {
          type:'node',
          id: '3',
          label: 'TH2',
          children: [
            {
              type:'radios',
              id: '7', 
              label: 'Radios', 
              children:[
                {
                  type:'radio2', id: '8', label: 'radio1'
                },
                {
                  type:'radio2', id: '9', label: 'radio2'
                }
              ]
            },
          ],
        }
      ]
    },
    {
      type:'radios',
      id: '10',
      label: 'Radio Networks',
      children:[
        {
          type:'radio2', id: '11', label: 'Net1'
        },
        {
          type:'radio2', id: '12', label: 'Net2'
        }
      ]
    }]
  },
  {
    type:'network',
    id: '13',
    label: 'My Network',
  },
  {
    type:'network',
    id: '14',
    label: 'My Network',
  },
  {
    type:'network',
    id: '15',
    label: 'My Network',
  },
  {
    type:'network',
    id: '16',
    label: 'My Network',
  },
  {
    type:'network',
    id: '17',
    label: 'My Network',
  },
  {
    type:'network',
    id: '18',
    label: 'My Network',
  },
  {
    type:'network',
    id: '19',
    label: 'My Network',
  },
  {
    type:'network',
    id: '20',
    label: 'My Network',
  },
  {
    type:'network',
    id: '21',
    label: 'My Network',
  },
  {
    type:'network',
    id: '22',
    label: 'My Network',
  },
  {
    type:'network',
    id: '23',
    label: 'My Network',
  },
  {
    type:'network',
    id: '24',
    label: 'My Network',
  }

];

const findBiggestId = (items, currentMaxId = '0') => {
  let maxId = currentMaxId;

  const traverseItems = (items) => {
    for (const item of items) {
      if (parseInt(item.id) > parseInt(maxId)) {
        maxId = item.id;
      }
      if (item.children) {
        traverseItems(item.children);
      }
    }
  };

  traverseItems(items);
  return maxId;
};


const removeElementById = (idToRemove, items) => {
  return items.filter(item => {
    if (item.id === idToRemove) {
      return false; // Exclude item with matching id
    }
    if (item.children) {
      // Recursively remove item with matching id from children arrays
      item.children = removeElementById(idToRemove, item.children);
    }
    return true;
  });
};


const removeItemFromItemArray = (id)=>{
  itemArray = itemArray.filter(item => item.id !== id);
}

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
      }else{
        // console.error("no children !!!");
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
    if (id == element.id) {
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

  const [hoverdItem, setHoverdItem] = useState('');
  const [contextMenuElement, setContextMenuElement] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);
  const [items, setItems] = useState(ITEMS)
  const [lastID, setLastID] = useState(findBiggestId(ITEMS))


  // useEffect(() => {
  //   console.error("teeeeeeeeeeeeeeeeeeeeesssssssssssssssssssst");
  //   console.error("lastID : ", lastID);
  // }, [lastID]);


  function addDashLine() {
    const emptyElements = document.getElementsByClassName('css-19d0qwr-MuiTreeItem2-iconContainer')
    for (let index = 0; index < emptyElements.length; index++) {
      const element = emptyElements[index];
      if (element.innerHTML == '') {
        element.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <line x1="4" y1="12" x2="20" y2="12" stroke="wheat" stroke-width="2"></line>
                             </svg>`
      }
    }
  }

  const initEventListener = ()=>{
    initEventListenerWithName('network-class')
    initEventListenerWithName('node-class')
    initEventListenerWithName('nodes-class')
    initEventListenerWithName('radios-class')
    initEventListenerWithName('radio2-class')
  }

  useEffect(()=>{
    if (contextMenuElement != '' && hoverdItem != '') {
      if (contextMenuElement != hoverdItem) {
        // hideContextMenu('network-class-ContextMenu')
        hideContextMenu('node-class-ContextMenu')
        hideContextMenu('nodes-class-ContextMenu')
        hideContextMenu('radios-class-ContextMenu')
        hideContextMenu('radio2-class-ContextMenu')
      }
    }

  }, [contextMenuElement, hoverdItem])

  // useEffect(()=>{
  //   console.error("contextMenuElement : ", contextMenuElement);

  // }, [contextMenuElement])

  const addNewElementToList = (parentId, newElementData, elementType) => {
    setLastID((prevLastID) => {
      const newLastID = (parseInt(prevLastID) + 1).toString();
      console.error("XXXXXXXXXXXXXXXXXXXX : ", newElementData.name);
      
      const newElement = {
        type: elementType,
        id: newLastID,
        label: newElementData.name
      };
      itemArray.push(newElement)
      console.error("newElement : ", newElement);
  
      const addElementToTree = (items, parentId) => {
        return items.map(item => {
          if (item.id === parentId) {
            return {
              ...item,
              children: item.children ? [newElement, ...item.children] : [newElement]
            };
          }
          if (item.children) {
            return {
              ...item,
              children: addElementToTree(item.children, parentId)
            };
          }
          return item;
        });
      };
      
      setItems(prevItems => addElementToTree(prevItems, parentId));
      return newLastID;
    });
  };
  

  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);

    setTimeout(() => {
      addDashLine();
      initEventListener()
      
    }, 0);    
  };

  const getAllItemsWithChildrenItemIds = (items) => {
    const itemIds = [];
    const registerItemId = (item) => {
      if (item.children?.length) {
        itemIds.push(item.id);
        item.children.forEach(registerItemId);
      }
    };
  
    items.forEach(registerItemId);
  
    return itemIds;
  };

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside);


    setExpandedItems(getAllItemsWithChildrenItemIds(items))
    setTimeout(() => {
      addDashLine();
      initEventListener()
    }, 100);

    setLastID(findBiggestId(items))
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
      
      // console.error(element.id);
      element.addEventListener('contextmenu', (e)=>{
        e.preventDefault()
        if (name !== 'network-class') {
          showContextMenu(name, e, element)
          setContextMenuElement(element.id)
          
        }
      })

      element.addEventListener('mouseenter', (e)=>{
        // const hoveredNodeName = e.target.innerText;
        setHoverdItem(element.id)
      })
    }
  }

  const handleClickOutside = (event) => {                   //OK
    if (!event.target.closest("#nodes-class-ContextMenu")) {
      hideContextMenu('nodes-class-ContextMenu')
    }
    if (!event.target.closest("#node-class-ContextMenu")) {
      hideContextMenu('node-class-ContextMenu')
    }
    if (!event.target.closest("#radios-class-ContextMenu")) {
      hideContextMenu('radios-class-ContextMenu')
    }
    if (!event.target.closest("#radio2-class-ContextMenu")) {
      hideContextMenu('radio2-class-ContextMenu')
    }
    // if (!event.target.closest('#network-class-ContextMenu')) {
    //   hideContextMenu('network-class-ContextMenu')
    // }
  };

  const showContextMenu = (name, event, element)=>{
    const elementName = event.target.innerText;
    console.error(elementName);

    const elementPosition = element.getBoundingClientRect();

    const contextMenu = document.getElementById(name.concat('-ContextMenu'));
    contextMenu.style.display = 'block';
    contextMenu.style.left = (elementPosition.right) + 'px';
    contextMenu.style.top = (elementPosition.top) + 'px';
  }

  const hideContextMenu = (name)=>{
    const contextMenu = document.getElementById(name);
    contextMenu.style.display = 'none';
  }



  const handleRemoveRadio = () => {
    setItems(prevItems => removeElementById(contextMenuElement, prevItems));
    removeItemFromItemArray(contextMenuElement)
    console.error(itemArray);
  };

  const addNewRadio = (setAddNewRadio)=>{
    hideContextMenu('radios-class-ContextMenu')
    console.error("radio id: ",contextMenuElement);
    setAddNewRadio(true) 
  }


  useEffect(()=>{
    console.error("isAddNewNode and isAddNewRadio: ", props.isAddNewNode, props.isAddNewRadio);
    if (props.isAddNewRadio) {
      console.error("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      addNewElementToList(contextMenuElement, props.newRadioData, 'radio2')
      props.setIsAddNewRadio(false)
    }else if (props.isAddNewNode) {
      console.error("////////////////////////////////////////");
      addNewElementToList(contextMenuElement, props.newNodeData, 'node')
    }
    
    setTimeout(() => {
      addDashLine();
      initEventListener()      
    }, 10);  
       
  }, [props.isAddNewRadio, props.newRadioData, props.isAddNewNode])


  const addNewConnection = (nodesContextMenuName)=>{      //TODO
    hideContextMenu(nodesContextMenuName)
    props.setIsAddConnection(true)

  }

  const showNodesInfo = (nodesContextMenuName)=>{
    hideContextMenu(nodesContextMenuName)
    props.setDataOfDataView("nodes data are going to show here") // TODO: just should add an style and set the real data in it
  }

  return (

    <Fragment>

      {/*                                         nodes ContextMenu                                                   */}
      <div id="nodes-class-ContextMenu" style={{ display: 'none', position: 'absolute' }}>
        <ul className="treeViewContextMenuUl">
          <li className="treeViewContextMenuItem contextMenuItem" onClick={()=> {
            hideContextMenu('nodes-class-ContextMenu')
            props.setIsAddMarker(true)
            props.setAddNewNode(true)
          }
          }>Add Node</li>
          <li className="treeViewContextMenuItem contextMenuItem" onClick={()=>{addNewConnection('nodes-class-ContextMenu')}}>Add New Connection</li>
          <li className="lastTreeViewContextMenuItem contextMenuItem" onClick={()=>{showNodesInfo('nodes-class-ContextMenu')}}>Node's info</li>
          {/* Add more options as needed */}
        </ul>
      </div>

      {/*                                         node ContextMenu                                                   */}
      <div id="node-class-ContextMenu" style={{ display: 'none', position: 'absolute' }}>
        <ul className="treeViewContextMenuUl">
          <li className="treeViewContextMenuItem contextMenuItem" onClick={()=> hideContextMenu('node-class-ContextMenu')}>Remove Node</li>
          <li className="treeViewContextMenuItem contextMenuItem">Update Node</li>
          <li className="treeViewContextMenuItem contextMenuItem">Node's Info</li>
          <li className="lastTreeViewContextMenuItem contextMenuItem">Relative Connections</li>
          {/* Add more options as needed */}
        </ul>
      </div>

      {/*                                         radios ContextMenu                                                   */}
      <div id="radios-class-ContextMenu" style={{ display: 'none', position: 'absolute' }}>
        <ul className="treeViewContextMenuUl">
          <li className="treeViewContextMenuItem contextMenuItem" onClick={()=>addNewRadio(props.setAddNewRadio)}>Add Radio</li>
          <li className="lastTreeViewContextMenuItem contextMenuItem">Radio's Info</li>
          {/* Add more options as needed */}
        </ul>
      </div>

      {/*                                         radio2 ContextMenu                                                   */}
      <div id="radio2-class-ContextMenu" style={{ display: 'none', position: 'absolute' }}>
        <ul className="treeViewContextMenuUl">
          <li className="treeViewContextMenuItem contextMenuItem" onClick={(e)=>{
            hideContextMenu('radio2-class-ContextMenu')
            handleRemoveRadio()
            }}>Remove Radio</li>
          <li className="treeViewContextMenuItem contextMenuItem">Update Radio</li>
          <li className="lastTreeViewContextMenuItem contextMenuItem">Radio's Info</li>
          {/* Add more options as needed */}
        </ul>
      </div>


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