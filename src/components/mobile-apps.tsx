import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core';
import React, { useContext } from 'react';
import { viContext } from '../context/value_index_context';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import routeNames from '../names/routeNames';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import intigrationAnimation from '../animations/integrationAnimation/data.json';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';
import CallToAction from './ui/call_to_action';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  itemContainer: {
    maxWidth: '40em',
  },
}));

const MobileApps = () => {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(viContext);
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: intigrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '5em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              component={Link}
              to={routeNames.customsoftware.link}
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                context?.setActiveIndex(routeNames.customsoftware.activeIndex);
                context?.setSelectedIndex(
                  routeNames.customsoftware.selectedIndex
                );
              }}
            >
              <ArrowBackIcon style={{ fill: theme.palette.primary.main }} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur minima soluta quaerat tempore aliquid assumenda quae
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              ipsa maxime impedit recusandae architecto esse deleniti numquam
              commodi voluptatem consequatur, harum sit nulla. Sequi velit iure
              vel iusto beatae! Voluptate.Voluptate blanditiis cumque, tempore
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to={routeNames.websites.link}
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                context?.setActiveIndex(routeNames.websites.activeIndex);
                context?.setSelectedIndex(routeNames.websites.selectedIndex);
              }}
            >
              <ArrowForwardIcon style={{ fill: theme.palette.primary.main }} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        style={{ marginBottom: '15em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sequi cupiditate eveniet at, numquam nobis labore veniam veritatis
              consequuntur impedit doloremque incidunt iusto nulla vel sit
              aspernatur, perspiciatis ducimus odit!
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sequi cupiditate eveniet at, numquam nobis labore veniam veritatis
              consequuntur impedit doloremque incidunt iusto nulla vel sit
              aspernatur, perspiciatis ducimus odit!
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} />
        </Grid>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='h4'
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sequi cupiditate eveniet at, numquam nobis labore veniam veritatis
            </Typography>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sequi cupiditate eveniet at, numquam nobis labore veniam veritatis
              consequuntur impedit doloremque incidunt iusto nulla vel sit
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '10em' }}
      >
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt='swiss army knife' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt='extend access'
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt='increse engagement' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
