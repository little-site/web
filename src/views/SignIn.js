import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import './Base.css';
import './SignIn.css';

class SignInView extends Component {
  render() {
    return (
      <div className="Inline SignIn">
        {!this.props.signedIn && !this.props.token ? (
          <GoogleLogin
            clientId="840963869418-8ee1i9jg4h6gjm32aseuo4n8d5j3u89v.apps.googleusercontent.com"
            buttonText="Sign In with Google"
            onSuccess={payload => {
              this.props.successHandler(payload);
            }}
            onFailure={error => {
              console.log(error);
            }}
            cookiePolicy={'single_host_origin'}
          />
        ) : (
          undefined
        )}
        {this.props.token ? (
          <div>
            {this.props.newSite ? (
              <div>
                <h1>Welcome</h1>
                <h3>Site</h3>
                <pre>
                  https://little.site/
                  {this.props.newSite}
                </pre>
              </div>
            ) : (
              undefined
            )}
            <h3>Token</h3>
            <pre>{this.props.token}</pre>
            <button
              onClick={() => {
                this.props.signOutHandler();
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default SignInView;
