import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Login from '../imports/ui/Login';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    
  }
}
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={} />
    <Route path="/signup" component={Signup} onEnter={} />
    <Route path="/links" component={Link} />
    <Route path="*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  // IF on an unauthenticatedpage and logged in redirect to /links user push()
  if (isAuthenticated && isUnauthenticatedPage) {
    browserHistory.push('/links');
  }
  if (!isAuthenticated && isAuthenticatedPage) {
    browserHistory.push('/');
  }
  // If on an authenticated page and not logged in push to /
});

Meteor.startup(() => {
  ReactDOM.render(
    routes,
    document.getElementById('app')
  );
});
