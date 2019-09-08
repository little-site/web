import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Posts from './controllers/Posts';
import Post from './controllers/Post';

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
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
        </div>
      </Switch>
    );
  }
}

export default App;
