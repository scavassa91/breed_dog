import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getAllBreeds } from '../actions/index';

import { ListGroup, ListGroupItem } from 'reactstrap';

class ListBreed extends Component {
  componentDidMount () {
    this.props.getAllBreeds();
  }

  handleClickBreed (key) {
    console.log(key);
  }

  renderBreed () {
    return(
        _.map(this.props.breeds, (value, key) => {
          return (
            <ListGroupItem
              onClick={(e) => this.handleClickBreed(key)}
              key={key}>
              {value}
            </ListGroupItem>
          );
      })
    );
  }

  render () {
    return (
      <div className="list-breed col-md-3 float-left">
        <ListGroup>
          {this.renderBreed()}
        </ListGroup>
      </div>
      );
  }
}

function mapStateToProps(state){
  return{
    breeds: state.BreedReducer
  };
}

export default connect(mapStateToProps, { getAllBreeds })(ListBreed);
