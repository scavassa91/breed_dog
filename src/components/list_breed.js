import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllBreeds, getRandImg, selectBreed } from '../actions/index';

import { splitBreed, upperFistLetter } from '../utils';

import '../styles/list_breed.css';

/**
 * Class representing a List of Breed
 * @extends Component
 */
class ListBreed extends Component {
  constructor (props) {
    super(props);

    this.state = { breeds: '' };
  }

  /**
   * Triggered after the component is rendered
   */
  componentDidMount () {
    // Get all the list of breeds
    this.props.getAllBreeds();
  }

  /**
   * Triggered when the component will receive new props
   */
  componentWillReceiveProps (nextProps) {
    // Get the next props and set into the state breeds to make search
    this.setState({ breeds: nextProps.breeds });
  }

  /**
   * Handle when the Breed is clicked
   * @param {String} key Dog breed splited by '-' in lowercase
   */
  handleClickBreed (key) {
    // Split the breed to make a request
    let breedName = splitBreed(key);

    // Set the current selected breed
    this.props.selectBreed(key);
    // Get a specified image selected by breed and by subBreed
    this.props.getRandImg(breedName.breed, breedName.subBreed);
  }

  /**
   * Makes a search into breeds
   * @param {String} search Text to search
   */
  searchBreed (search) {
    // Filter breed by text and return an Array
    let breedsResult = _.filter(this.props.breeds, (item) => {
      if (item.indexOf(search.toLowerCase()) >= 0) {
        return item;
      }
    });
    // Verify if there is some breed to show, if it's not show all the breeds
    if (breedsResult.length > 0) {
      this.setState({ breeds: breedsResult });
    } else {
      this.setState({ breeds: this.props.breeds });
    }
  }

  /**
   * Render the list of breed item
   * @return {Object} With all ListGroupItem to be rendered
   */
  renderBreed (breeds) {
    if (breeds.length > 0) {
      return (breeds.map((value) => {
          let breedName = splitBreed(value);

          return (
            <li key={value}>
              <a
                href="#"
                className="waves-effect"
                onClick={() => this.handleClickBreed(value)}>
                {upperFistLetter(breedName.subBreed)} {upperFistLetter(breedName.breed)}
              </a>
            </li>
          );
        })
      );
    }
  }

  renderSearchBar () {
    return (
      <li className="search">
        <div className="search-wrapper card">
          <input
            onChange={ (event) => this.searchBreed(event.target.value) }
            id="search"/><i className="material-icons">search</i>
        </div>
      </li>
    );
  }

  /**
   * Render the list of breed
   * @return {Object} With all the template to render the ListBreed
   */
  render () {
    return (
      <div className="list-breed col-md-3 float-left">

        <ul id="slide-out" className="side-nav fixed">
          { this.renderSearchBar() }
          { this.renderBreed(this.state.breeds) }
        </ul>
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
    breeds: state.BreedReducer,
  };
}

/**
 * Export the connect with all the functions and props to make the ListBreed a container
 * @module components/list_breed
 */
export default connect(mapStateToProps, { selectBreed, getAllBreeds, getRandImg })(ListBreed);
