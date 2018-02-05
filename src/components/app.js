import React, { Component } from 'react';

// CSS import
import '../styles/app.css';

// Import components
import ListBreed from './list_breed';
import BreedDetails from './breed_details';
import Header from './header';

/**
 * Class representing App
 * @extends Component
 */
class App extends Component {
  /**
   * Render the app
   * @return {Object} With all the template to render the App
   */
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <ListBreed />
          <BreedDetails />
        </div>
      </div>
    );
  }
}

/**
 * Exports the component App
 * @module components/app
 */
export default App;
