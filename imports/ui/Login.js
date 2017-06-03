import React from 'react';
import { Meteor } from 'meteor/meteor';

import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({
          error: 'Unable to login. Check email and password.'
        });
      } else {
        this.setState({
          error: err.reason
        });
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Login to Short Link</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Login</button>
        </form>

        <Link to="/signup">Have an account?</Link>
      </div>
    );
  }
};