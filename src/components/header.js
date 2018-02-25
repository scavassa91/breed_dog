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
      <div>
        <nav className="top-nav blue darken-1">
          <div className="nav-wrapper">
            <div className="container">
              <label className="page-title">Breed Dog</label>
            </div>
          </div>
        </nav>
        <div className="container">
          <a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only"><i className="material-icons">menu</i></a>
        </div>
      </div>
    );
  }
}

/**
 * Exports the component Header
 * @module components/header
 */
export default Header;
