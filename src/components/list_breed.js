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
    let breedName = this.splitBreed(key);

    this.props.selectBreed(key);
    this.props.getRandImg(breedName.breed, breedName.subBreed);
  }

  splitBreed (key) {
    let breed;
    let subBreed;
    let split;

    if (key.indexOf('-')) {
      split = key.split('-');
      breed = split[0];
      subBreed = split[1];
    }
    return {
      breed,
      subBreed
    }
  }

  upperFistLetter (string) {
    if (string)
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderBreed () {
    return(
        _.map(this.props.breeds, (value, key) => {

          let breedName = this.splitBreed(value);

          return (
            <ListGroupItem
              onClick={() => this.handleClickBreed(key)}
              key={key}>
              {this.upperFistLetter(breedName.subBreed)} {this.upperFistLetter(breedName.breed)}
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
