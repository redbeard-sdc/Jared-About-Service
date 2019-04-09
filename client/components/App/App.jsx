/* eslint-disable space-infix-ops */
import React from 'react';
import { Component } from 'react';
import Header from '../header/Header.jsx';
import styles from './index.css';
import AmenitiesList from '../AmenitiesList/AmenitiesList.jsx';
import RoomFeaturesList from '../RoomFeaturesList/RoomFeaturesList.jsx';
import GoodToKnowList from '../GoodToKnowList/GoodToKnowList.jsx';
import HotelLink from '../HotelLink/HotelLink.jsx';
import ReviewScores from '../ReviewScores/ReviewScores.jsx';
import About from '../About/About.jsx';
import Photos from '../Photos/Photos.jsx';
import Modal from '../Modal/Modal.jsx';
import cx from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      amenities: [],
      roomFeatures: [],
      hotelStyle: [],
      photos: [],
      id: '',
      hotelName: '',
      hotelClass: 0,
      hotelLink: '',
      about: '',
      show: false
    };
    this.getHotel = this.getHotel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  componentDidMount() {
    this.getHotel();
  }

  showModal(e) {
    console.log(e);
    console.log(this.state.show);
    this.setState({
      show: true
    });
  }

  hideModal(e) {
    this.setState({
      show: false
    });
  }

  getHotel() {
    fetch('http://localhost:3000/hotels/Stanley%20Hotel')
      .then(response => response.json())
      .then(data => {
        const hotelData = data[0];
        this.setState({
          ratings: hotelData.ratings,
          amenities: hotelData.hotel_amenities,
          roomFeatures: hotelData.room_features,
          hotelStyle: hotelData.hotel_style,
          photos: hotelData.photos,
          id: hotelData._id,
          name: hotelData.hotel_name,
          hotelClass: hotelData.hotel_class,
          hotelLink: hotelData.hotel_link,
          about: hotelData.about
        });
      });
  }

  render() {
    return (
      <div className={styles.app}>
        <Modal hideModal={this.hideModal} roomFeatures={this.state.roomFeatures} amenities={this.state.amenities} show={this.state.show}/>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header/>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div>
                <ReviewScores ratings={this.state.ratings}/>
              </div>
              <div>
                <About about={this.state.about}/>
              </div>
              <div>
                <Photos photos={this.state.photos}/>
              </div>
            </div>
            <div className='col-sm-6'>
              <div>
                <AmenitiesList id={this.state.id} amenities={this.state.amenities} showModal={this.showModal}/>
              </div>
              <div>
                <RoomFeaturesList features={this.state.roomFeatures}/>
              </div>
              <div>
                <GoodToKnowList hotelClass={this.state.hotelClass} hotelStyle={this.state.hotelStyle}/>
              </div>
              <div>
                <HotelLink/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;


// className={cx("col-sm-6", styles.myClass)}