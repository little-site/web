import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Base.css';

const NavStyle = 'mw5 measure ph3 center pt4 mt3',
  LinkStyle = 'fade-in color-inherit no-underline f6';

class Nav extends Component {
  render() {
    return (
      <div className={NavStyle}>
        <Link className={LinkStyle} to={`/${this.props.site}`}>
          {this.props.site}
        </Link>
      </div>
    );
  }
}

export default Nav;
