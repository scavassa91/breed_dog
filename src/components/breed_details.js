import React, { Component } from  'react';
import { connect } from 'react-redux';
import { getRandImg } from '../actions/index';

import { Button } from 'reactstrap';

class BreedDetails extends Component {
  componentDidMount () {
    this.props.getRandImg();
  }

  renderImg () {
    if (this.props.imgUrl)
      return <img className="dog-img" alt="Random dog" src={this.props.imgUrl} />;
    return <p>Loading...</p>;
  }

  handleButtonClick () {
    this.props.getRandImg();
  }

  render() {
    return (
      <div className="breed-details col-md-8 float-left">
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
    imgUrl: state.ImageReducer
  };
}

export default connect(mapStateToProps, { getRandImg })(BreedDetails);
