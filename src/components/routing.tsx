import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routeNames from '../names/routeNames';
import CustomSoftware from './custom_software';
import LandingPage from './landing_page';
import MobileApps from './mobile-apps';
import Services from './services';
import Footer from './ui/footer';
import Header from './ui/header';
import Websites from './websites';

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={routeNames.home.link} component={LandingPage} />
        <Route exact path={routeNames.services.link} component={Services} />
        <Route
          exact
          path={routeNames.customsoftware.link}
          component={CustomSoftware}
        />
        <Route exact path={routeNames.mobileapps.link} component={MobileApps} />
        <Route exact path={routeNames.websites.link} component={Websites} />
        <Route exact path={routeNames.revolution.link} component={MobileApps} />
        <Route exact path={routeNames.about.link} component={Websites} />
        <Route exact path={routeNames.contact.link} component={MobileApps} />
        <Route exact path={routeNames.estimate.link} component={Websites} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
