import React, { Component } from 'react';

import { ListGroup } from 'reactstrap';

import ListBreedItem from './list_breed_item';

class ListBreed extends Component {
  render() {
    return (
      <div className="list-breed col-md-4 float-left">
        <ListGroup>
          <ListBreedItem />
        </ListGroup>
      </div>
      );
  }
}

export default ListBreed;
