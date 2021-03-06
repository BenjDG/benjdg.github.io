import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import pic from './reducedSelf.png';

function About () {
  return (
    <section id='about-me'>
      <Typography variant='h4'>
        <Box lineHeight={2} m={0}>
          About Me
        </Box>
      </Typography>
      <hr />
      <Grid
        container
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12} sm={12} md={5}>
          <Box m='auto'>
            <img
              style={{ margin: '2rem auto', display: 'block' }}
              src={pic}
              alt='me'
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Box mx='auto' p={1}>
            <p>
              My name is Ben. As a recent graduate of the University of Kansas Full-Stack coding bootcamp, I have new skills in JavaScript, React.js, Node.js and responsive web design. Being a self-starter and intellectual, I also enjoy learning new skills and collaborating in teams to maintain and create web applications. A bachelor’s degree in education and 5 years as a Systems Engineer give me a great foundation to build my skills upon. Working in education, healthcare and government give me inside background knowledge to create effective and user-first web applications. I enjoy writing code and employing new technologies to improve the efficiency, effectiveness and quality of the product and business.
            </p>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
