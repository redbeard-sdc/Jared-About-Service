import React from 'react';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Photos.css';
import IndividualPhoto from '../IndividualPhoto/IndividualPhoto.jsx';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  handleClick(event) {
    const url = event.target.src;
    this.setState({
      photo: url
    });
  }

  handleRightArrowClick(event) {
    const current = this.state.photo;
    const index = this.props.photos.indexOf(current) + 1;
    this.setState({
      photo: this.props.photos[index]
    });
  }

  handleLeftArrowClick(event) {
    const current = this.state.photo;
    const index = this.props.photos.indexOf(current) - 1;
    this.setState({
      photo: this.props.photos[index]
    });
  }

  render() {
    const photos = this.props.photos.map((photo) => {
      return <IndividualPhoto handleClick={this.handleClick} photo={photo}/>;    
    });
    return (
      <div>   
        <div className={styles.selected}>
          <img src={this.state.photo} height="272" width="369.672"/>
          <div name="right" onClick={this.handleRightArrowClick} className={styles.right}>
            <a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">></a>
          </div>
          <div name="left" onClick={this.handleLeftArrowClick} className={styles.left}>
            <a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">{'<'}</a>
          </div>
        </div>
        <div className={styles.photolist}>
          {photos}
        </div>
      </div>
    );
  }
}


export default Photos;