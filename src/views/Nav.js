import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Base.css';
import './Nav.css';

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Inline Nav">
        <Link to={`/${this.props.site}`}>{this.props.site}</Link>
      </div>
    );
  }
}

export default Nav;
