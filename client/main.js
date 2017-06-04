import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { onAuthChange, routes } from '../imports/routes/routes';
import { Links } from '../imports/api/links';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// tracker auto run
// fetch all links using find
// print to console

Tracker.autorun(() => {
  const links = Links.find().fetch(); // fetch by find
  console.log(links);
});

Meteor.startup(() => {
  ReactDOM.render(
    routes,
    document.getElementById('app')
  );
});
