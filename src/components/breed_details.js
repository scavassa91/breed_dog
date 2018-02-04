import React, { Component } from  'react';
import { connect } from 'react-redux';
import { getRandImg } from '../actions/index';

import { Button } from 'reactstrap';

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
    // Get the current breed and split to make the request
    let breedName = this.splitBreed(this.props.breed);

    // Makes the request to get a new dog image
    this.props.getRandImg(breedName.breed ,breedName.subBreed);
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
   * Render the dog image
   * @return {Object} With the image to be rendered
   */
  renderImg () {
    if (this.props.imgUrl)
    return <img className="dog-img" alt="Random dog" src={this.props.imgUrl} />;
    return <p>Loading...</p>;
  }

  /**
   * Render the dog details by breed
   * @return {Object} With all the template to render the BreedDetails
   */
  renderBreed () {
    if (this.props.breed) {
      let breedName = this.splitBreed(this.props.breed);

      return <h3>Click in the button to see a {this.upperFistLetter(breedName.subBreed)} {this.upperFistLetter(breedName.breed)} picture</h3>
    }
    return <h3>Click in the button to see a random picture</h3>
  }

  /**
   * Render the breed details
   * @return {Object} With all the template to render the BreedDetails
   */
  render() {
    return (
      <div className="breed-details col-md-8 float-left">
        { this.renderBreed(this.props.breed) }
        <div className="hold-img">
          { this.renderImg() }
        </div>
        <Button color="primary" onClick={() => this.handleButtonClick()}>Random</Button>
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
