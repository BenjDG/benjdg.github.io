import React from 'react';
import { AppBar, Box, Button, Grid, Link, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  typographyStyle: {
    flex: 1
  },
  menu: {
    color: 'white'
  }
}));

function Nav () {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar disableGutters>
          <Grid container>
            <Grid item xs='auto' sm={2} />
            <Grid item container xs={12} sm={8}>
              <Typography component='span' className={classes.typographyStyle} variant='h5'>
                <Box lineHeight={3} pl={2}>
                  Ben Galloway
                </Box>
              </Typography>
              <Typography component='span' className={classes.root}>
                <Box lineHeight={3} p={1}>
                  <Button aria-controls='scroll-menu' aria-haspopup='true' onClick={handleClick}>
                    <MenuIcon className={classes.menu} />
                  </Button>
                  <Menu
                    id='scroll-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} href='#about-me' color='inherit'> About Me </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} href='#portfolio' color='inherit'> Projects </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} href='#contact' color='inherit'> Contact </Link></MenuItem>
                  </Menu>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs='auto' sm={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
