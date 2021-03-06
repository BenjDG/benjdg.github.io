import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import About from '../components/About';
import Sites from '../components/Sites';
import Contact from '../components/Contact';
import './styles.css';

const useStyles = makeStyles(theme => ({
  home: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5)
  }
}));

function Home () {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.home}>
        <Grid container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <About />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Box>
      <Box className={classes.home}>
        <Grid container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Sites />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Box>
      <Box className={classes.home}>
        <Grid container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Contact />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
