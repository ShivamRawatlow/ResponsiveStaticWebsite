import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/landinganimation/data';
import ButtonArrow from '../components/ui/ButtonArrow';
import customSoftwareIcon from '../assets/customSoftwareIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import CallToAction from './ui/call_to_action';
import { Link } from 'react-router-dom';
import routeNames from '../names/routeNames';
import { viContext } from '../context/value_index_context';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    //@ts-ignore
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: '50',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    },
  },
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(viContext);
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        {/***------Hero Block-------- */}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              className={classes.buttonContainer}
              justify='center'
            >
              <Grid item>
                <Button
                  component={Link}
                  to={routeNames.estimate.link}
                  className={classes.estimateButton}
                  variant='contained'
                  onClick={() =>
                    context?.setActiveIndex(routeNames.estimate.activeIndex)
                  }
                >
                  {routeNames.estimate.name}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to={routeNames.revolution.link}
                  className={classes.learnButtonHero}
                  variant='outlined'
                  onClick={() =>
                    context?.setActiveIndex(routeNames.revolution.activeIndex)
                  }
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.animation} sm item>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
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
        {/**-----IOS/Android Block--------- */}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
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
        {/**-----Websites Block--------- */}
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
              width: matchesSM ? undefined : '35em',
              // textAlign: matchesSM ? 'center' : undefined,
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
          <Grid item>
            <img
              className={classes.icon}
              alt='website icon'
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/**-----Revolution Block--------- */}
        <Grid
          style={{ height: '100em', marginTop: '12em' }}
          container
          alignItems='center'
          justify='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with citting-edge technology is a
                    recepie for revolution.
                  </Typography>
                  <Button
                    variant='outlined'
                    component={Link}
                    to={routeNames.revolution.link}
                    className={classes.learnButton}
                    onClick={() =>
                      context?.setActiveIndex(routeNames.revolution.activeIndex)
                    }
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>

                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.primary.main}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid>
        {/**-----Information Block--------- */}
        <Grid
          container
          style={{ height: '80em' }}
          alignItems='center'
          direction='row'
        >
          <Grid
            container
            style={{
              position: 'absolute',
              textAlign: matchesXS ? 'center' : 'inherit',
            }}
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid
              sm
              item
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? '10em' : 0 }}
                direction='column'
              >
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to={routeNames.about.link}
                    variant='outlined'
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                    onClick={() =>
                      context?.setActiveIndex(routeNames.about.activeIndex)
                    }
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>

                    <ButtonArrow width={10} height={10} fill={'white'} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>
                  Say hello!<span>👋</span>
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to={routeNames.contact.link}
                    variant='outlined'
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                    onClick={() =>
                      context?.setActiveIndex(routeNames.contact.activeIndex)
                    }
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>

                    <ButtonArrow width={10} height={10} fill={'white'} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/**Call to action */}
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
