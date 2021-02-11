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
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <About />
          </Grid>
          <Grid item xs={2}/>

          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Sites />
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Contact />
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
