import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

function Contact () {
  return (
    <section id='contact'>
      <Typography variant='h4'>
        <Box lineHeight={2} m={0}>
          Contact Me
        </Box>
      </Typography>
      <hr />
      <Grid container justify='space-evenly'>
        <Box p={4}>
          <Grid item>
            <a href='https://www.linkedin.com/in/ben-g-b2a74353/'><i className='fab fa-linkedin fa-9x' />
            </a>
          </Grid>
        </Box>
        <Box p={4}>
          <Grid item>
            <a href='https://github.com/BenjDG'><i className='fab fa-github-square fa-9x' />
            </a>
          </Grid>
        </Box>
        <Box p={4}>
          <Grid item>
            <a href='mailto:bdgalloway85@gmail.com'><i className='fas fa-envelope fa-9x' />
            </a>
          </Grid>
        </Box>
      </Grid>
    </section>
  );
}

export default Contact;
