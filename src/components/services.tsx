import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { viContext } from '../context/value_index_context';
import routeNames from '../names/routeNames';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.secondary.main,
  },
  learnButton: {
    //@ts-ignore
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 25,
    },
  },
}));

const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(viContext);
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Grid item>
        {/**-----IOS/Android Block--------- */}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginTop: '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>IOS/Android App Development</Typography>
            <Typography variant='subtitle1'>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to={routeNames.mobileapps.link}
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                context?.setActiveIndex(routeNames.mobileapps.activeIndex);
                context?.setSelectedIndex(routeNames.mobileapps.selectedIndex);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt='mobile phone Icon  '
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/**-----Custom Software Block--------- */}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1'>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              to={routeNames.customsoftware.link}
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                context?.setActiveIndex(routeNames.customsoftware.activeIndex);
                context?.setSelectedIndex(
                  routeNames.customsoftware.selectedIndex
                );
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt='custom software icon'
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/**-----Websites Block--------- */}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1'>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to={routeNames.websites.link}
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                context?.setActiveIndex(routeNames.websites.activeIndex);
                context?.setSelectedIndex(routeNames.websites.selectedIndex);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt='website icon'
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
