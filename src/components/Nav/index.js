import React from 'react';
import { AppBar, Box, Grid, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  typographyStyle: {
    flex: 1
  },
  links: {
    marginRight: theme.spacing(2)
  }
}));

function Nav () {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar disableGutters='true'>
          <Grid container>
            <Grid item xs={2} />
            <Grid item container xs={8}>
              <Typography component='span' className={classes.typographyStyle} variant='h5'>
                <Box lineHeight={3} m={0}>
                  Ben Galloway
                </Box>
              </Typography>
              <Typography component='span' className={classes.root}>
                <Box lineHeight={3} p={1}>
                  <Link className={classes.links} href='#about-me' color='inherit'> About Me </Link>
                  <Link className={classes.links} href='#portfolio' color='inherit'> Projects </Link>
                  <Link className={classes.links} href='#contact' color='inherit'> Contact </Link>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
