import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React, { useContext } from 'react';
import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import { Link } from 'react-router-dom';
import routeNames from '../../names/routeNames';
import { viContext } from '../../context/value_index_context';

const useStyles = makeStyles((theme) => ({
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
  estimateButton: {
    //@ts-ignore
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.secondary.main,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },

  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const context = useContext(viContext);

  return (
    <Grid
      container
      style={{ height: '60em' }}
      alignItems='center'
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br /> Revolutionary Results
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century
            </Typography>
            <Grid container justify={matchesSM ? 'center' : undefined} item>
              <Button
                component={Link}
                to={routeNames.revolution.link}
                variant='outlined'
                className={classes.learnButton}
                onClick={() =>
                  context?.setActiveIndex(routeNames.revolution.activeIndex)
                }
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.primary.main}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to={routeNames.estimate.link}
          variant='contained'
          className={classes.estimateButton}
          onClick={() =>
            context?.setActiveIndex(routeNames.estimate.activeIndex)
          }
        >
          {routeNames.estimate.name}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
