import React, { Component } from 'react';

import '../styles/header.css';

class Header extends Component {
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

export default Header;
