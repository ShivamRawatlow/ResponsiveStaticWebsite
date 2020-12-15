import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../assets/homelogo.svg';
import { Link } from 'react-router-dom';
import routeNames from '../../names/routeNames';
import { useTheme } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { viContext } from '../../context/value_index_context';

interface Props {
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },

  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    margin: '.5rem',
    height: '6rem',
    width: '9rem',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    color: 'white',
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  logoContainer: {
    padding: 0,
    marginLeft: '3rem',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    background: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const context = useContext(viContext);

  const [anchorElement, setAnchorElement] = useState<
    (EventTarget & HTMLAnchorElement) | null
  >(null);
  const [openMenu, setOpenMenu] = useState(false);

  const theme: any = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  //@ts-ignore
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOnMouseOver = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setAnchorElement(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorElement(null);
    setOpenMenu(false);
  };

  const handleChange = (e: React.ChangeEvent<{}>, newValue: any) => {
    context?.setActiveIndex(newValue);
  };

  const handleMenuItemClick = (i: number) => {
    setAnchorElement(null);
    setOpenMenu(false);
    context?.setSelectedIndex(i);
  };

  const menuOptions = [
    {
      name: routeNames.services.name,
      link: routeNames.services.link,
      activeIndex: routeNames.services.activeIndex,
      selectedIndex: routeNames.services.selectedIndex,
    },
    {
      name: routeNames.customsoftware.name,
      link: routeNames.customsoftware.link,
      activeIndex: routeNames.customsoftware.activeIndex,
      selectedIndex: routeNames.customsoftware.selectedIndex,
    },
    {
      name: routeNames.mobileapps.name,
      link: routeNames.mobileapps.link,
      activeIndex: routeNames.mobileapps.activeIndex,
      selectedIndex: routeNames.mobileapps.selectedIndex,
    },
    {
      name: routeNames.websites.name,
      link: routeNames.websites.link,
      activeIndex: routeNames.websites.activeIndex,
      selectedIndex: routeNames.websites.activeIndex,
    },
  ];

  const routes = [
    {
      name: routeNames.home.name,
      link: routeNames.home.link,
      activeIndex: routeNames.home.activeIndex,
      selectedIndex: routeNames.home.selectedIndex,
    },
    {
      name: routeNames.services.name,
      link: routeNames.services.link,
      activeIndex: routeNames.services.activeIndex,
      selectedIndex: routeNames.services.selectedIndex,
      ariaOwns: anchorElement ? 'simple-menu' : undefined,
      ariaHaspopup: anchorElement ? 'true' : undefined,
      onMouseOver: handleOnMouseOver,
    },
    {
      name: routeNames.revolution.name,
      link: routeNames.revolution.link,
      activeIndex: routeNames.revolution.activeIndex,
      selectedIndex: routeNames.revolution.selectedIndex,
    },
    {
      name: routeNames.about.name,
      link: routeNames.about.link,
      activeIndex: routeNames.about.activeIndex,
      selectedIndex: routeNames.about.selectedIndex,
    },
    {
      name: routeNames.contact.name,
      link: routeNames.contact.link,
      activeIndex: routeNames.contact.activeIndex,
      selectedIndex: routeNames.contact.selectedIndex,
    },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (context?.activeIndex !== route.activeIndex) {
            context?.setActiveIndex(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== context?.selectedIndex
            ) {
              context?.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case routeNames.estimate.link:
          context?.setActiveIndex(routeNames.estimate.activeIndex);
          break;
        default:
          break;
      }
    });
  }, [context?.activeIndex, menuOptions, context?.selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        value={context?.activeIndex}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        {routes.map((route) => (
          <Tab
            key={route.link}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            //@ts-ignore
            aria-haspopup={route.ariaHaspopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to={routeNames.estimate.link}
        variant='contained'
        color='secondary'
        className={classes.button}
        onClick={() => {
          context?.setActiveIndex(routeNames.estimate.activeIndex);
        }}
      >
        {routeNames.estimate.name}
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorElement}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.link}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={() => {
              handleMenuItemClick(i);
              context?.setActiveIndex(i);
            }}
            selected={
              i === context?.selectedIndex && context?.activeIndex === 1
            }
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.link}
              divider
              button
              component={Link}
              onClick={() => {
                setOpenDrawer(false);
                context?.setActiveIndex(route.activeIndex);
              }}
              to={route.link}
              selected={context?.activeIndex === route.activeIndex}
            >
              <ListItemText
                className={
                  context?.activeIndex === route.activeIndex
                    ? [classes.drawerItem, classes.drawerItemSelected].join(' ')
                    : classes.drawerItem
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            component={Link}
            onClick={() => {
              setOpenDrawer(false);
              context?.setActiveIndex(routeNames.estimate.activeIndex);
            }}
            to={routeNames.estimate.link}
            className={classes.drawerItemEstimate}
            selected={context?.activeIndex === routeNames.estimate.activeIndex}
          >
            <ListItemText
              className={
                context?.activeIndex === routeNames.estimate.activeIndex
                  ? [classes.drawerItem, classes.drawerItemSelected].join(' ')
                  : classes.drawerItem
              }
              disableTypography
            >
              {routeNames.estimate.name}
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon style={{ fill: 'white' }} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to={routeNames.home.link}
              onClick={() =>
                context?.setActiveIndex(routeNames.home.activeIndex)
              }
              disableRipple
            >
              <img alt='company logo' className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
