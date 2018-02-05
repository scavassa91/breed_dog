import React, { Component } from 'react';

import '../styles/footer.css';
/**
 * Class representing the Footer
 * @extends Component
 */
class Footer extends Component {
  /**
   * Render the Footer
   * @return {Object} With all the template to render the Footer
   */
  render () {
    return (
      <footer>
        <p>API Link: <a href="https://dog.ceo/dog-api/">Dog API</a></p>
      </footer>
    );
  }
}

/**
 * Exports the component Header
 * @module components/footer
 */
export default Footer;
