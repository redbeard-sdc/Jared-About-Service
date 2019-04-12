import React, { Component } from 'react';
import styles from './Modal.css';
import AmenitiesListItem from '../AmenitiesListItem/AmenitiesListItem';
import RoomFeaturesListItem from '../RoomFeaturesListItem/RoomFeaturesListItem';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: true
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleTabClick(e) {
    if (
      (e.target.id === 'amenities' && !this.state.amenities) ||
      (e.target.id === 'features' && this.state.amenities)
    ) {
      this.setState(prevState => ({
        amenities: !prevState.amenities
      }));
    }
  }

  handleButtonClick(e) {
    this.props.hideModal();
  }

  render() {
    const amenityItems = this.props.amenities.map((amenity, index) => {
      return <AmenitiesListItem key={index} amenity={amenity} />;
    });

    const featureItems = this.props.roomFeatures.map((feature, index) => {
      return <RoomFeaturesListItem key={index} feature={feature} />;
    });

    let display, amenitiesTab, featuresTab, amenitiesList, featuresList;
    if (this.props.show === false) {
      display = styles.hidden;
    } else {
      display = styles.shown;
    }

    if (this.state.amenities === true) {
      amenitiesTab = styles.selected;
      featuresTab = styles.unselected;
      amenitiesList = styles.shownList;
      featuresList = styles.hiddenList;
    } else {
      featuresTab = styles.selected;
      amenitiesTab = styles.unselected;
      featuresList = styles.shownList;
      amenitiesList = styles.hiddenList;
    }

    return (
      <div className={display}>
        <div className={styles.modal}>
          <div
            onClick={this.handleButtonClick}
            className={styles.closeButton}
          />
          <div className={styles.container}>
            <h1 className={styles.h1}>Amenities</h1>
            <div className={styles.tabs}>
              <span
                id="amenities"
                className={amenitiesTab}
                onClick={this.handleTabClick}
              >
                Property Amenities
              </span>
              <span
                id="features"
                className={featuresTab}
                onClick={this.handleTabClick}
              >
                Room features
              </span>
              <span className={styles.filler} />
            </div>
            <div className={amenitiesList}>{amenityItems}</div>
            <div className={featuresList}>{featureItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
