import { Grid } from '@material-ui/core';
import React from 'react';
import Sites from '../components/Sites';

function Projects () {
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Sites />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default Projects;
