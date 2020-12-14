import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles,
} from '@material-ui/core';
import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import routeNames from '../names/routeNames';
import { viContext } from '../context/value_index_context';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';
import roots from '../assets/root.svg';
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

const CustomSoftware = () => {
  const theme = useTheme();
  const classes = useStyles();
  const context = useContext(viContext);
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              component={Link}
              to={routeNames.services.link}
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                context?.setActiveIndex(routeNames.services.activeIndex);
                context?.setSelectedIndex(routeNames.services.selectedIndex);
              }}
            >
              <ArrowBackIcon style={{ fill: theme.palette.primary.main }} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              Custom Software Development
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
              officia minus, ipsa velit eum enim cumque praesentium. A explicabo
              cupiditate facilis totam cumque!
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
              minima eveniet omnis vitae quia! Illum sint, quasi dignissimos
              tempore quis mollitia placeat alias velit sed, sapiente fuga autem
              quo iure molestias asperiores labore, officia rem.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              tempora temporibus sequi harum possimus inventore earum quam
              beatae cum perspiciatis repudiandae reprehenderit, quo vel nemo
              voluptates aliquam voluptatem eum esse.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to={routeNames.mobileapps.link}
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                context?.setActiveIndex(routeNames.mobileapps.activeIndex);
                context?.setSelectedIndex(routeNames.mobileapps.selectedIndex);
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
        direction='row'
        justify='center'
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          style={{ maxWidth: '40em' }}
          item
          container
          direction='column'
          alignItems='center'
          md
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
            marginBottom: matchesSM ? '10em' : 0,
          }}
          container
          direction='column'
          alignItems='center'
          md
        >
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{ maxWidth: '40em' }}
          direction='column'
          alignItems='center'
          md
        >
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='lightbulb' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-between'
        style={{ marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
        >
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur hic debitis nobis suscipit
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                dicta officiis, ullam similique ad sit doloribus, ex architecto
                est asperiores praesentium ut vel, exercitationem laudantium
                delectus? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Numquam, aspernatur saepe soluta aperiam corrupti ipsam
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                dicta officiis, ullam similique ad sit doloribus, ex architecto
                est asperiores praesentium ut vel, exercitationem laudantium
                delectus? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Numquam, aspernatur saepe soluta aperiam corrupti ipsam
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                dicta officiis, ullam similique ad sit doloribus, ex architecto
                est asperiores praesentium ut vel, exercitationem laudantium
                delectus? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Numquam, aspernatur saepe soluta aperiam corrupti ipsam
                perferendis quia,
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        style={{ marginTop: '20em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={roots}
              alt='tree with roots extending out'
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' align='center' gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              repudiandae atque architecto tempora illo laudantium voluptatem.
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              repudiandae atque architecto tempora illo laudantium voluptatem
              repellendus sequi qui necessitatibus? Ipsa placeat molestias unde
              doloremque ut totam assumenda cupiditate repellat.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-between'
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
        >
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur hic debitis nobis suscipit
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                dicta officiis, ullam similique ad sit doloribus, ex architecto
                est asperiores praesentium ut vel, exercitationem laudantium
              </Typography>
              <Typography variant='body1' paragraph>
                dicta officiis, ullam similique ad sit doloribus, ex architecto
                est asperiores praesentium ut vel, exercitationem laudantium
                delectus? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          direction={matchesSM ? 'column' : 'row'}
          item
          container
          className={classes.itemContainer}
          md
        >
          <Grid item>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                dicta officiis, ullam similique ad sit doloribus, ex architecto
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                dicta officiis, ullam similique ad sit doloribus, ex architecto
                est asperiores praesentium ut vel, exercitationem laudantium
                delectus?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                dicta officiis, ullam similique ad sit doloribus, ex architecto
                est asperiores praesentium ut vel, exercitationem laudantium
                delectus?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
