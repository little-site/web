import React, { Component } from 'react';
import API from '../models/API';
import PostView from '../views/Post';
import Nav from '../views/Nav';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: undefined
    };

    this.api = new API();
  }

  componentDidMount() {
    this.api.getPost(this.props.match.params.slug).then(posts => {
      this.setState({ post: posts[0] });
    });
  }

  render() {
    return (
      <div className="Posts">
        <Nav site={this.props.match.params.site} />
        {this.state.post ? (
          <PostView
            {...this.state.post}
            site={this.props.match.params.site}
            show_link={false}
          />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default Post;
