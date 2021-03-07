import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import About from '../components/About';
import Sites from '../components/Sites';
import Contact from '../components/Contact';
import './styles.css';

const useStyles = makeStyles(theme => ({
  home: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(20)
  }
}));

function Home () {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.home}>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <About />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
      <Box className={classes.home}>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Sites />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
      <Box className={classes.home}>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Contact />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
