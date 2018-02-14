import React, { Component } from  'react';
import { connect } from 'react-redux';
import { getRandImg } from '../actions/index';

import { splitBreed } from '../utils';

import Background from '../images/button-bg.png';

import '../styles/breed_details.css';

var buttonBg = {
  backgroundImage: `url("${Background}")`
};

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
    return <img className="dog-img" alt="Random dog" src={this.props.imgUrl} />;
    return <p>Loading...</p>;
  }

  /**
   * Render the breed details
   * @return {Object} With all the template to render the BreedDetails
   */
  render() {
    return (
      <div className="breed-details col-md-9 float-left">
        <div className="hold-img">
          { this.renderImg() }
        </div>
        <div className="hold-button">
          <button style={ buttonBg } onClick={() => this.handleButtonClick()}></button>
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
