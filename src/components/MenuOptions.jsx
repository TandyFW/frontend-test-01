import React, { useState } from 'react';
import { Redirect } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert.js';

const options = ['Criar', 'Editar'];
const ITEM_HEIGHT = 48;
function MenuOptions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuChoice, setMenuChoice] = useState(null);

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = ({ target }) => {
    if (target.nodeName === 'LI') setMenuChoice(target.firstChild.nodeValue); 
    setAnchorEl(null);
  };

  return(
    <div>
      { menuChoice === 'Criar' ? <Redirect to='/create' /> : '' }
      <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
  );
}

export default MenuOptions;
