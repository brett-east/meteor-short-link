import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

export default class PrivateHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  onLogout() {
    Accounts.logout();
  }
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
};


PrivateHeader.PropTypes = {
  title: PropTypes.string.isRequired
};
