import { Grid } from '@material-ui/core';
import React from "react";
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Sites from '../components/Sites';
// import './styles.css';


function Home () {
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