<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

function Nav () {
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
      <h2 className='m-2'>Ben Galloway</h2>
=======
import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
=======
import React, { useEffect, useState } from "react";
import { AppBar, ClickAwayListener, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
>>>>>>> 86143f1... add hamburger button
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typographyStyle: {
    flex: 1,
  }
}));

function Nav () {
  const [anchorEl, setAnchorEl] = useState(null);
  const [location, setLocation] = useState('');
  const classes = useStyles();

  useEffect(() => {
    switch (location) {
      case "Portfolio":
        document.querySelector('#portfolio').scrollIntoView();
        break;
      case "About Me":
        document.querySelector('#about-me').scrollIntoView();
        break;
      case "Contact":
        document.querySelector('#contact').scrollIntoView();
        break;

      default:
        break;
    }
  }, [location]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = (event) => {
    if (event.nativeEvent.target.firstChild) {
      setLocation(event.nativeEvent.target.firstChild.data);
      setAnchorEl(null);
    }
  };

  const handleClickAway = () => {
    setLocation('');
    setAnchorEl(null);
  };

  return (
<<<<<<< HEAD
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <h2 className="m-2">Ben Galloway</h2>
<<<<<<< HEAD
      <ThemeSelect />
>>>>>>> 16d56b9... add theme select option
=======
>>>>>>> 648a043... remove theme code
=======
    <div>
      <AppBar position='static'>
        <Toolbar>
<<<<<<< HEAD
          <Typography>Ben Galloway</Typography>

>>>>>>> 84bc03b... add AppBar
      <button
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#about-me'>About Me</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#portfolio'>Portfolio</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
      </Toolbar>
=======
          <Typography className={classes.typographyStyle}>Ben Galloway</Typography>
          <ClickAwayListener onClickAway={handleClickAway}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
          </ClickAwayListener>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>About Me</MenuItem>
            <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>
        </Toolbar>
>>>>>>> 86143f1... add hamburger button
      </AppBar>
    </div>
  );
}

export default Nav;
