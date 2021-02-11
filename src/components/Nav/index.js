import React, { useEffect, useState } from "react";
import { AppBar, ClickAwayListener, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
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
    <div>
      <AppBar position='static'>
        <Toolbar>
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
      </AppBar>
    </div>
  );
}

export default Nav;