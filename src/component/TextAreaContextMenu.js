import React from 'react';
import { Box, MenuItem, ClickAwayListener } from '@mui/material';

const ContextMenu = ({ contextMenu, handleClose, menuItems }) => {
  return (
    contextMenu !== null && (
      <ClickAwayListener onClickAway={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: contextMenu.mouseY,
            left: contextMenu.mouseX,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            boxShadow: 3,
            zIndex: 1300,
            borderRadius: 1,
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                item.onClick();
                handleClose();
              }}
              sx={{ whiteSpace: 'nowrap' }}  // Ensure items don't wrap
            >
              {item.label}
            </MenuItem>
          ))}
        </Box>
      </ClickAwayListener>
    )
  );
};

export default ContextMenu;
