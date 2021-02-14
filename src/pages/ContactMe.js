import { Grid } from '@material-ui/core';
import React from 'react';
import Contact from '../components/Contact';

function ContactMe () {
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Contact />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default ContactMe;
