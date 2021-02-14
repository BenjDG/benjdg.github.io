import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0
  }
});

function Footer () {
  const classes = useStyles();

  return (
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        Copywright 2021
      </Grid>
    </AppBar>
  );
}

export default Footer;
