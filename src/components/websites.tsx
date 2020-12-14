import {
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React, { useContext } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { viContext } from '../context/value_index_context';
import { Link } from 'react-router-dom';
import routeNames from '../names/routeNames';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreact from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';

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
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

const Websites = () => {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(viContext);
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: intigrationAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              component={Link}
              to={routeNames.mobileapps.link}
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                context?.setActiveIndex(routeNames.mobileapps.activeIndex);
                context?.setSelectedIndex(routeNames.mobileapps.selectedIndex);
              }}
            >
              <ArrowBackIcon style={{ fill: theme.palette.primary.main }} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              Website Development
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
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to={routeNames.services.link}
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                context?.setActiveIndex(routeNames.services.activeIndex);
                context?.setSelectedIndex(routeNames.services.selectedIndex);
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
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Analytics
              </Typography>
              <Grid item>
                <img
                  style={{ marginLeft: '-2.75em' }}
                  src={analytics}
                  alt='analytics image'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography align={matchesMD ? 'center' : undefined} variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            molestias, ipsum repudiandae blanditiis deserunt enim necessitatibus
            unde maxime delectus molestiae aut cum inventore optio amet.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                E-Commerce
              </Typography>
              <Grid item>
                <img src={ecommerce} alt='ecommerce image' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesMD ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          </Typography>
          <Typography
            align={matchesMD ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quasi
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Outreach
              </Typography>
              <Grid item>
                <img src={outreact} alt='megaphone' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography align={matchesMD ? 'center' : undefined} variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            molestias, ipsum repudiandae blanditiis deserunt enim necessitatibus
            unde maxime delectus molestiae aut cum inventore optio amet.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Search Engine
                <br /> Optimization
              </Typography>
              <Grid item>
                <img src={seo} alt='seo image' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesMD ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : undefined}
            className={classes.paragraphContainer}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi Lorem
            consectetur adipisicing elit. Quasi Lorem
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesMD ? 'center' : undefined}
            className={classes.paragraphContainer}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi Lorem
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Websites;
