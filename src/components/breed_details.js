import React, { Component } from  'react';
import { connect } from 'react-redux';
import { getRandImg } from '../actions/index';

import { Button } from 'reactstrap';

class BreedDetails extends Component {
  componentDidMount () {
    this.props.getRandImg(this.props.breed);
  }

  renderImg () {
    if (this.props.imgUrl)
      return <img className="dog-img" alt="Random dog" src={this.props.imgUrl} />;
    return <p>Loading...</p>;
  }

  renderBreed () {
    if (this.props.breed)
      return <h3>Click in the button to see a {this.props.breed} picture</h3>
    return <h3>Click in the button to see a random picture</h3>
  }

  handleButtonClick () {
    this.props.getRandImg(this.props.breed);
  }

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

function mapStateToProps(state){
  return{
    imgUrl: state.ImageReducer,
    breed: state.ActiveBreed
  };
}

export default connect(mapStateToProps, { getRandImg })(BreedDetails);
