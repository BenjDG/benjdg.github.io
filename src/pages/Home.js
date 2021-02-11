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