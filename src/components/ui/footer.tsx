import { Grid, Hidden, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import footerAdornment from '../../assets/bulbfooter.svg';
import routeNames from '../../names/routeNames';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import { Twitter } from '@material-ui/icons';
import { viContext } from '../../context/value_index_context';

const useStyles = makeStyles((theme) => ({
  footer: {
    //@ts-ignore
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '15em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: 'em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '21em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      width: '2.5em',
      height: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const context = useContext(viContext);

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to={routeNames.home.link}
                className={classes.link}
                onClick={() => {
                  context?.setActiveIndex(routeNames.home.activeIndex);
                }}
              >
                {routeNames.home.name}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to={routeNames.services.link}
                className={classes.link}
                onClick={() => {
                  context?.setActiveIndex(routeNames.services.activeIndex);
                  context?.setSelectedIndex(routeNames.services.selectedIndex);
                }}
              >
                {routeNames.services.name}
              </Grid>
              <Grid
                item
                component={Link}
                to={routeNames.customsoftware.link}
                className={classes.link}
                onClick={() => {
                  context?.setActiveIndex(
                    routeNames.customsoftware.activeIndex
                  );
                  context?.setSelectedIndex(
                    routeNames.customsoftware.selectedIndex
                  );
                }}
              >
                {routeNames.customsoftware.name}
              </Grid>
              <Grid
                item
                component={Link}
                to={routeNames.mobileapps.link}
                className={classes.link}
                onClick={() => {
                  context?.setActiveIndex(routeNames.mobileapps.activeIndex);
                  context?.setSelectedIndex(
                    routeNames.mobileapps.selectedIndex
                  );
                }}
              >
                {routeNames.mobileapps.name}
              </Grid>
              <Grid
                item
                component={Link}
                to={routeNames.websites.link}
                className={classes.link}
                onClick={() => {
                  context?.setActiveIndex(routeNames.websites.activeIndex);
                  context?.setSelectedIndex(routeNames.websites.selectedIndex);
                }}
              >
                {routeNames.websites.name}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to={routeNames.revolution.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.revolution.activeIndex)
                }
              >
                {routeNames.revolution.name}
              </Grid>

              <Grid
                item
                component={Link}
                to={routeNames.vision.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.vision.activeIndex)
                }
              >
                {routeNames.vision.name}
              </Grid>
              <Grid
                item
                component={Link}
                to={routeNames.technology.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.technology.activeIndex)
                }
              >
                {routeNames.technology.name}
              </Grid>
              <Grid
                item
                component={Link}
                to={routeNames.process.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.process.activeIndex)
                }
              >
                {routeNames.process.name}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to={routeNames.about.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.about.activeIndex)
                }
              >
                {routeNames.about.name}
              </Grid>
              <Grid
                item
                component={Link}
                to={routeNames.history.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.history.activeIndex)
                }
              >
                {routeNames.history.name}
              </Grid>
              <Grid
                item
                component={Link}
                to={routeNames.team.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.team.activeIndex)
                }
              >
                {routeNames.team.name}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to={routeNames.contact.link}
                className={classes.link}
                onClick={() =>
                  context?.setActiveIndex(routeNames.contact.activeIndex)
                }
              >
                {routeNames.contact.name}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href={'https://www.facebook.com'}
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='facebook logo' src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href={'https://www.twitter.com'}
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='twitter logo' src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href={'https://www.instagram.com'}
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='instagram logo' src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
