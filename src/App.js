import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Posts from './controllers/Posts';
import Post from './controllers/Post';
import SignIn from './controllers/SignIn';
import Index from './views/Home';

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
          <Route
            exact
            path="/"
            component={Index}
        </Switch>
      </Router>
    );
  }
}

export default App;
