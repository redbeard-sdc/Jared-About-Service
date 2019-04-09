import React, { Component } from 'react';
import styles from './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === 'amenities' && !this.state.amenities || e.target.id === 'features' && this.state.amenities) {
      this.setState(prevState => ({
        amenities: !prevState.amenities
      }));
    }
  }

  render() {
    let display, amenities, roomFeatures;
    if (this.props.show === false) {
      display = styles.hidden;
    } else {
      display = styles.shown;
    }
  
    if (this.state.amenities === true) {
      amenities = styles.selected;
      roomFeatures = styles.unselected;
    } else {
      roomFeatures = styles.selected;
      amenities = styles.unselected;
    }

    return (
      <div className={display}>
        <div className={styles.modal}>
          <div className={styles.container}>
            <h1>Amenities</h1>
            <div className={styles.tabs}>
              <span id="amenities"className={amenities} onClick={this.handleClick}>
                Property Amenities
              </span>
              <span id="features" className={roomFeatures} onClick={this.handleClick}>
                Room features
              </span>
              <span className={styles.filler}>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

