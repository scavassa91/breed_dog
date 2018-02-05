import React, { Component } from 'react';

import titleImg from '../images/title-app.jpg';

import '../styles/header.css';

/**
 * Class representing the Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Render the Header
   * @return {Object} With all the template to render the Header
   */
  render () {
    return (
      <header>
        <div className="container">
          <img alt="title" src={titleImg} />
        </div>
      </header>
    );
  }
}

/**
 * Exports the component Header
 * @module components/header
 */
export default Header;
