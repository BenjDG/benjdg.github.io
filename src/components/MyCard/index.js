import React from 'react';
import TechListItem from '../TechListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box, Button, CardActions, CardContent, CardMedia, Grid, List, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    gridGap: '8px',
    borderRadius: '20px',
    boxShadow: '5px 5px 10px 0px #000000',
    height: '80rem'
  },
  body: {
    textAlign: 'start',
    minHeight: theme.spacing(45),
  },
  media: {
    borderRadius: '20px',
    borderBottom: '1px solid #000',
    padding: '5px',
    width: '100%',
    height: '50%'
  },
  action: {
    justifyContent: 'center'
  }
}));

function MyCard ({ idword, imgSrc, siteTitle, siteDescription, url, github, tech }) {
  const classes = useStyles();

  const handleCodeClick = () => {
    window.location = github;
  };

  const handleSiteClick = () => {
    window.location = url;
  };

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card className={classes.card}>
        <div id={idword}>
            <CardMedia
              component='img'
              className={classes.media}
              image={imgSrc}
              title={siteTitle + ' website screenshot'}
            />
          <CardContent className={classes.body}>
            <Box p={2}>
              <Typography variant='h5' component='h2'>
                {siteTitle}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {siteDescription}
              </Typography>
            </Box>
            <Box p={2}>
              <Typography variant='h5' component='h3'>
                Technologies
              </Typography>
              <List>
                {tech.map((item, index) => (<TechListItem key={index} item={item} />))}
              </List>
            </Box>
          </CardContent>

          <CardActions className={classes.action}>
            <Box p={2}>
              <Button size='small' color='primary' variant='outlined' onClick={handleSiteClick}>
                Deployed Site
              </Button>
            </Box>
            <Box p={2}>
              <Button id={idword + '-code-button'} size='small' color='secondary' variant='outlined' onClick={handleCodeClick}>
                Show me code
              </Button>
            </Box>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
}

export default MyCard;
