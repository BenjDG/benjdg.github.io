import React from 'react';
import TechListItem from '../TechListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Button, CardActions, CardContent, CardMedia, Grid, List, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    height: '100%',
    margin: 12,
    border: 'none',
    boxShadow: 'none',
    flexGrow: 1
  },
  media: {
    height: 300
  },
  control: {
    padding: theme.spacing(4)
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
    <Grid item container direction='column' component={Card} xs={6} className={classes.control}>
      <Card className={classes.root}>
        <div id={idword}>

          <Grid item>
            <CardMedia
              className={classes.media}
              image={imgSrc}
              title={siteTitle + ' website screenshot'}
            />
          </Grid>
          <Grid item>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {siteTitle}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {siteDescription}
              </Typography>

              <Typography gutterBottom variant='h5' component='h3'>
                Technologies
              </Typography>
              <List>
                {tech.map((item, index) => (<TechListItem key={index} item={item} />))}
              </List>
            </CardContent>
          </Grid>

          <Grid item container alignItems='flex-end'>
            <CardActions>
              <Button size='small' color='primary' variant='outlined' onClick={handleSiteClick}>
                Deployed Site
              </Button>
              <Button id={idword + '-code-button'} size='small' color='primary' variant='outlined' onClick={handleCodeClick}>
                Show me code
              </Button>
            </CardActions>
          </Grid>
        </div>
      </Card>
    </Grid>
  );
}

export default MyCard;
