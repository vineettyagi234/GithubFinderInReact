import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
        <ul>
          <lil>
            <Link to='/'>Home</Link>
          </lil>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
