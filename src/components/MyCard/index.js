import React from 'react';
import TechListItem from '../TechListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box, Button, CardActions, CardContent, CardMedia, Grid, List, Typography } from '@material-ui/core';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    gridGap: '8px'
  },
  body: {
    textAlign: 'start',
    minHeight: theme.spacing(45)
  },
  media: {
    height: 300,
    borderRadius: '50%'
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
    <Grid item xs={6}>
      <Card className={classes.card}>
        <div id={idword}>
          <Box border={7} borderRadius='50%'>
            <CardMedia
              component='img'
              className={classes.media}
              image={imgSrc}
              title={siteTitle + ' website screenshot'}
            />
          </Box>
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
