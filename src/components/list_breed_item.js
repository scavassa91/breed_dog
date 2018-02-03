import React, { Component } from 'react';

import { ListGroupItem } from 'reactstrap';

class ListBreedItem extends Component {
  render() {
    return (
      <div className="list-breed-items">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </div>
    );
  }
}

export default ListBreedItem;
