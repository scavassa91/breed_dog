import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllBreeds, getRandImg, selectBreed } from '../actions/index';

import { ListGroup, ListGroupItem } from 'reactstrap';

class ListBreed extends Component {
  componentDidMount () {
    this.props.getAllBreeds();
  }

  handleClickBreed (key) {
    let breed;
    let subBreed;
    let split;

    if (key.indexOf('-')) {
      split = key.split('-');
      breed = split[0];
      subBreed = split[1];
    }

    this.props.selectBreed(key);
    this.props.getRandImg(breed, subBreed);
    console.log(this.props);
  }

  renderBreed () {
    return(
        _.map(this.props.breeds, (value, key) => {
          return (
            <ListGroupItem
              onClick={() => this.handleClickBreed(key)}
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

export default connect(mapStateToProps, { selectBreed, getAllBreeds, getRandImg })(ListBreed);
