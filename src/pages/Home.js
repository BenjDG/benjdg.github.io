<<<<<<< HEAD
import React from 'react';
=======
import { Grid } from '@material-ui/core';
import React from "react";
>>>>>>> 098d1b5... add grid to header
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Sites from '../components/Sites';
// import './styles.css';

<<<<<<< HEAD
function Home () {
=======

<<<<<<< HEAD
function Home() {
>>>>>>> 0bf3d99... add new picture
=======
function Home () {
>>>>>>> 098d1b5... add grid to header
  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item container>
          <Grid item>
            <About />
          </Grid>
          <Grid item>
            <Sites />
          </Grid>
          <Grid item>
            <Contact />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
