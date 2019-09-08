import React, { Component } from 'react';
import API from '../models/API';
import Post from '../views/Post';
import Nav from '../views/Nav';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.api = new API();
  }

  componentDidMount() {
    this.api.getPosts(this.props.match.params.site).then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="Posts">
        <Nav site={this.props.match.params.site} />
        {this.state.posts.map(p => (
          <Post
            key={p.id}
            site={this.props.match.params.site}
            show_link={true}
            {...p}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
