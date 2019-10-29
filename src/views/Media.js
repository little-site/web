import React, { Component } from 'react';
import './Base.css';

const MediaWrapper = 'border-box db overflow-hidden w-100 mv2 relative',
  MediaElement = 'w-100 absolute transition-opacity oversize';

class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaLoaded: false
    };
  }

  renderMediaElement() {
    const commonAttributes = {
      src: this.props.url_optimized,
      className: `{${this.state.mediaLoaded ? '' : 'o-0'} ${MediaElement}}`
    };

    const mediaLoadedState = {
      mediaLoaded: true
    };

    switch (this.props.type) {
      case 'jpeg':
      case 'jpg':
      case 'png':
        return (
          <img
            alt=""
            onLoad={() => this.setState(mediaLoadedState)}
            {...commonAttributes}
          />
        );

      case 'gif':
        return (
          <video
            alt=""
            onLoadStart={e => {
              e.target.setAttribute('muted', 'true');
              this.setState(mediaLoadedState);
            }}
            autoPlay={true}
            loop={true}
            controls={false}
            muted={true}
            playsInline={true}
            poster={this.props.url_poster}
            {...commonAttributes}
          />
        );

      default:
        return undefined;
    }
  }

  render() {
    const style = {
      backgroundColor: this.props.avg_color,
      paddingBottom: `${(1 / this.props.aspect) * 100}%`
    };

    return (
      <div
        className={MediaWrapper}
        style={style}
        // onClick={() => {
        //   window.open(this.props.url, '_blank');
        // }}
      >
        {this.renderMediaElement()}
      </div>
    );
  }
}

export default Media;
