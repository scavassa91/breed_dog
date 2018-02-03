import React, { Component } from 'react';

// CSS import
import '../styles/app.css';

//components import
import ListBreed from './list_breed';
import BreedDetails from './breed_details';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ListBreed />
        <BreedDetails />
      </div>
    );
  }
}

export default App;
