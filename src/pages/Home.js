import { Grid } from '@material-ui/core';
import React from 'react';
import About from '../components/About';

function Home () {
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <About />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default Home;
