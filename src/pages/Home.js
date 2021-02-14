<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import { Grid } from '@material-ui/core';
=======
import { Grid, useTheme } from '@material-ui/core';
>>>>>>> 89136c3... set vertical spacing
import React from "react";
>>>>>>> 098d1b5... add grid to header
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Sites from '../components/Sites';
<<<<<<< HEAD
// import './styles.css';

<<<<<<< HEAD
function Home () {
=======
=======
import './styles.css';
>>>>>>> 89136c3... set vertical spacing
=======
import { Grid } from '@material-ui/core';
import React from 'react';
import About from '../components/About';
>>>>>>> e8f55c9... add footer

<<<<<<< HEAD
function Home() {
>>>>>>> 0bf3d99... add new picture
=======
function Home () {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 098d1b5... add grid to header
=======

>>>>>>> 59c12dd... update Grid layout
=======
>>>>>>> e8f55c9... add footer
=======
import { Grid } from '@material-ui/core';
import React from 'react';
=======
import { Grid, useTheme } from '@material-ui/core';
import React from "react";
>>>>>>> parent of e8f55c9... add footer
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Sites from '../components/Sites';
import './styles.css';

function Home () {
<<<<<<< HEAD
>>>>>>> e8f55c99166131eda3deed9a745811a7a7fb9823
=======

>>>>>>> parent of e8f55c9... add footer
  return (
    <div>
      <Grid container direction='column' spacing={5}>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item container spacing={10}>
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