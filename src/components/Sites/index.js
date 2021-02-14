import React from 'react';
import MyCard from '../MyCard';
import data from '../../assets/db/sites.json';
import { Box, Grid, Typography } from '@material-ui/core';

function Sites () {
  return (
    <section id='portfolio'>
      <Typography variant='h4'>
        <Box lineHeight={2} m={0}>
          Portfolio
        </Box>
      </Typography>
      <hr />
      <Grid container alignItems='stretch'>
        {data.data.map(({ idword, imgSrc, siteTitle, siteDescription, url, github, tech }) => (
          <MyCard key={url} idword={idword} imgSrc={imgSrc} siteTitle={siteTitle} siteDescription={siteDescription} url={url} github={github} tech={tech} />
        ))}
      </Grid>
    </section>
  );
}

export default Sites;
