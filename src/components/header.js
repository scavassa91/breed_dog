import React, { Component } from 'react';

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
          <h1>Dog Breed App</h1>
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
