import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Posts from './controllers/Posts';
import Post from './controllers/Post';
import SignIn from './controllers/SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route
            exact
            path="/:site"
            component={props => <Posts {...props} />}
          />
          <Route
            exact
            path="/:site/:slug"
            component={props => <Post {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
