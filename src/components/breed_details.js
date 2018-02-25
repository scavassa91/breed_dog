import React, { Component } from  'react';
import { connect } from 'react-redux';
import { getRandImg } from '../actions/index';

import { splitBreed } from '../utils';

import { MediaBox, Button, Icon } from 'react-materialize';

import '../styles/breed_details.css';

/**
 * Class representing the Breed Details
 * @extends Component
 */
class BreedDetails extends Component {
  /**
   * Triggered after the component is rendered
   */
  componentDidMount () {
    // Get a random image from the server
    this.props.getRandImg();
  }

  /**
   * Search a new image making a request to the server
   */
  handleButtonClick () {
    let breedName
    // Get the current breed and split to make the request
    if (this.props.breed) {
      breedName = splitBreed(this.props.breed);
      // Makes the request to get a new dog image
      this.props.getRandImg(breedName.breed ,breedName.subBreed);
    } else {
        // Makes the request to get a new dog image
      this.props.getRandImg();
    }
  }

  /**
   * Render the dog image
   * @return {Object} With the image to be rendered
   */
  renderImg () {
    if (this.props.imgUrl)
      return <MediaBox src={this.props.imgUrl} caption={this.props.breed} width="100%"/>
    return <p>Loading...</p>;
  }

  /**
   * Render the breed details
   * @return {Object} With all the template to render the BreedDetails
   */
  render() {
    return (
      <div>
      <div className="container">
        <div className="hold-img">
          { this.renderImg() }
        </div>
      </div>
      <div className="container hold-button">
        <Button
          className=" blue darken-2"
          onClick={() => this.handleButtonClick()}
          waves='light'>
          Next
          <Icon right>navigate_next</Icon>
        </Button>
      </div>
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
    imgUrl: state.ImageReducer,
    breed: state.ActiveBreed
  };
}

/**
 * Export the connect with all the functions and props to make the BreedDetails a container
 * @module components/breed_details
 */
export default connect(mapStateToProps, { getRandImg })(BreedDetails);
