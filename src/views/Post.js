import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Media from '../views/Media';
import './Base.css';

const Post = 'fade-in min-h5 pv5',
  PostContentFormat = 'f5 lh-copy mb4',
  PostInfo = 'mt2 f7 black-30 w-100',
  PostRight = 'fl ml3',
  Linked = 'underline-hover link color-inherit',
  Inline = 'mw5 measure ph3 center';

class PostView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldHide: true
    };
  }

  renderCreatedDate(ISODate) {
    const _date = moment(this.props.date_created);
    const humanDateFormat = _date.format('MMMM Do YYYY');

    return <time dateTime={ISODate}>{humanDateFormat}</time>;
  }

  renderText() {
    if (!this.props.comment) {
      return undefined;
    }

    return this.props.comment.split('\n').map((t, i) => {
      return (
        <p className={PostContentFormat} key={i}>
          {t}
        </p>
      );
    });
  }

  renderMedia() {
    if (!this.props.media) {
      return undefined;
    }

    return this.props.media.map((m, i) => <Media key={i} {...m} />);
  }

  renderLocation() {
    if (!this.props.location_name) {
      return undefined;
    }

    return (
      <span>
        &nbsp;—&nbsp;
        <a
          className={Linked}
          href={`http://maps.apple.com/?ll=${this.props.location_lat},${this.props.location_lon}&q=${this.props.location_name}`}
        >
          {this.props.location_name}
        </a>
      </span>
    );
  }

  componentDidMount() {
    this.setState({ shouldHide: false });
  }

  render() {
    return (
      <div
        className={`${Inline} ${Post} ${
          this.state.shouldHide ? 'Post--hidden' : ''
        }`}
      >
        <div>
          {this.renderText()}
          {this.renderMedia()}
        </div>
        <div className={PostInfo}>
          <Link
            className={Linked}
            to={`/${this.props.site}/${this.props.slug}/`}
          >
            {this.renderCreatedDate()}
          </Link>
          {this.renderLocation()}
          {this.props.tweet_id !== null ? (
            <a
              className={`${PostRight} ${Linked}`}
              href={`https://twitter.com/davehariri/status/${this.props.tweet_id}`}
              target="_blank"
            >
              On Twitter
            </a>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default PostView;
