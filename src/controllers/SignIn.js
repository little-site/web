import axios from 'axios';
import React, { Component } from 'react';

import SignInView from '../views/SignIn';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: window.localStorage.getItem('token'),
      newSite: null,
      signedIn: false
    };

    this.onSignInSuccess = this.onSignInSuccess.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    window.localStorage.removeItem('token');
    this.setState({ token: null, signedIn: false });
  }

  onSignInSuccess(tokenBundle) {
    // Mark as signed in
    this.setState(
      {
        signedIn: true
      },
      () => {
        axios
          .post('https://api.little.site/auth/', {
            google_token: tokenBundle.tokenId
          })
          .then(response => {
            this.setState(
              {
                token: response.data.token.token,
                newSite: response.data.site ? response.data.site.handle : null
              },
              () => {
                window.localStorage.setItem('token', this.state.token);
              }
            );
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  }

  render() {
    return (
      <SignInView
        successHandler={this.onSignInSuccess}
        signOutHandler={this.onSignOut}
        {...this.state}
      />
    );
  }
}

export default SignIn;
