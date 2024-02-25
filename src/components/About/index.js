import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import pic from './reducedSelf.png';

function About () {
  return (
    <section id='about-me'>
      <Typography variant='h4'>
        <Box lineHeight={2} m={0} p={1}>
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
              style={{ height: '20rem', margin: '2rem', display: 'block' }}
              src={pic}
              alt='me'
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Box mx='auto' p={1}>
            <p style={{textIndent: '30px'}}>
            Software Developer that loves to code and learn. A proactive self-starter who thrives on continuous learning and relishes the challenge of mastering new skills. My journey in programming has led me to become proficient in a range of languages including Python, PL/SQL, SQL,Node.js, React.js, and JavaScript. I'm also comfortable with Linux, Git, Github, and CI/CD pipelines. I also enjoy working with all kinds of databases including Oracle, SQL Server, MySQL, MongoDB, and others. I also have experience working with Postman, REST, and other API technologies. I'm also knowledgable in the software lifecycle development process, as well as Agile and working with Jira. Over 8 years of technology experience from healthcare, higher education and government. I also enjoy working in a team and collaborating with other developers.  
            </p>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
