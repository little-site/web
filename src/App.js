import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Posts from './controllers/Posts';
import Post from './controllers/Post';
import Index from './views/Home';

const reload = () => window.location.reload();

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
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
          <Route exact path="/" component={Index} onEnter={reload} />
        </Switch>
      </Router>
    );
  }
}

export default App;
