/* eslint-disable space-infix-ops */
import React from 'react';
import { Component } from 'react';
import Header from '../header/Header.jsx';
import styles from './index.css';
import AmenitiesList from '../AmenitiesList/AmenitiesList.jsx';
import RoomFeaturesList from '../RoomFeaturesList/RoomFeaturesList.jsx';
import GoodToKnowList from '../GoodToKnowList/GoodToKnowList.jsx';

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
      about: ''
    
    };
    this.getHotel = this.getHotel.bind(this);
  }
  
  componentDidMount() {
    this.getHotel();
  }

  getHotel() {
    fetch('http://localhost:3000/hotels/Gretashire%20Suites')
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
        <div className={styles.container}>
          <Header/>
          <div className={styles.column}>
            <div className={styles.left}>
            </div>
            <div className={styles.right}>
              <div>
                <AmenitiesList amenities={this.state.amenities}/>
              </div>
              <div>
                <RoomFeaturesList features={this.state.roomFeatures}/>
              </div>
              <div>
                <GoodToKnowList hotelClass={this.state.hotelClass} hotelStyle={this.state.hotelStyle}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;