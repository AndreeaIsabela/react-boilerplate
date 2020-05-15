import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import ConnectedDashboard from './views/Dashboard';
import NotFound from './views/NotFound';

const RouterView = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/dashboard' component={ConnectedDashboard} />
    <Route component={NotFound} />
  </Switch>
  
);

export default RouterView;