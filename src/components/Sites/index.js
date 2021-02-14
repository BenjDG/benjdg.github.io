<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Card from '../Card';
=======
import React from "react";
=======
import React from 'react';
>>>>>>> e8f55c9... add footer
import MyCard from '../MyCard';
>>>>>>> 59c12dd... update Grid layout
=======
import React from 'react';
=======
import React from "react";
>>>>>>> parent of e8f55c9... add footer
import MyCard from '../MyCard';
>>>>>>> e8f55c99166131eda3deed9a745811a7a7fb9823
import data from '../../assets/db/sites.json';
import { Box, Grid, Typography } from '@material-ui/core';

function Sites () {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='portfolio-color'>
      <div className='container'>
        <section id='portfolio' className='portfolio-section'>
          <h2 className='pt-4 px-2'>Portfolio</h2>
          <hr />
          <div className='container'>
            <div id='my-sites' className='row row-cols-1 row-cols-md-2'>
              {data.data.map(({ idword, imgSrc, siteTitle, siteDescription, url, github, tech }) => (
                <Card key={url} idword={idword} imgSrc={imgSrc} siteTitle={siteTitle} siteDescription={siteDescription} url={url} github={github} tech={tech} />
              ))}

            </div>
          </div>
        </section>
      </div>
    </div>
  );
=======
=======
>>>>>>> parent of e8f55c9... add footer
      <section id="portfolio">
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
  )
<<<<<<< HEAD
>>>>>>> 59c12dd... update Grid layout
=======
=======
>>>>>>> e8f55c99166131eda3deed9a745811a7a7fb9823
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
<<<<<<< HEAD
>>>>>>> e8f55c9... add footer
=======
>>>>>>> e8f55c99166131eda3deed9a745811a7a7fb9823
=======
>>>>>>> parent of e8f55c9... add footer
}

export default Sites;