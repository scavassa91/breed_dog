import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllBreeds, getRandImg, selectBreed } from '../actions/index';

import '../styles/list_breed.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

/**
 * Class representing a List of Breed
 * @extends Component
 */
class ListBreed extends Component {

  /**
   * Triggered after the component is rendered
   */
  componentDidMount () {
    // Get all the list of breeds
    this.props.getAllBreeds();
  }

  /**
   * Handle when the Breed is clicked
   * @param {String} key Dog breed splited by '-' in lowercase
   */
  handleClickBreed (key) {
    // Split the breed to make a request
    let breedName = this.splitBreed(key);

    // Set the current selected breed
    this.props.selectBreed(key);
    // Get a specified image selected by breed and by subBreed
    this.props.getRandImg(breedName.breed, breedName.subBreed);
  }

  /**
   * Split the breed to render and make requests
   * @param {String} key Dog breed split by '-'
   * @return {Object} Object with the breed and subBreed names
   */
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

  /**
   * Change the first letter of a string uppercase
   * @param {String} string A lowercase string
   * @return {String} String with the first letter in  uppercase
   */
  upperFistLetter (string) {
    if (string)
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Render the list of breed item
   * @return {Object} With all ListGroupItem to be rendered
   */
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

  /**
   * Render the list of breed
   * @return {Object} With all the template to render the ListBreed
   */
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


/**
 * Transform the reducer Object into props to the component
 * @param {Object} state the reducer state
 * @return {Object} the props to the component
 */
function mapStateToProps(state){
  return{
    breeds: state.BreedReducer
  };
}

/**
 * Export the connect with all the functions and props to make the ListBreed a container
 * @module components/list_breed
 */
export default connect(mapStateToProps, { selectBreed, getAllBreeds, getRandImg })(ListBreed);
