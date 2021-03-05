import { Grid } from '@material-ui/core';
import React from 'react';
import About from '../components/About';
import Sites from '../components/Sites';
import Contact from '../components/Contact';

function Home () {
  return (
    <div>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <About />
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Sites />
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Contact />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}

export default Home;
