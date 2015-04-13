'use strict';

// disable `no-unused-vars` rule
/* eslint no-unused-vars: 0 */
import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

export default (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute
      name='users'
      handler={require('./components/users')} />
    <Route
      name='guides'
      handler={require('./components/guides')} />
    <Route
      name='profile'
      path='profile/:seed'
      handler={require('./components/profile')} />
    <NotFoundRoute handler={require('./pages/not-found')} />
  </Route>
);
