import React from 'react';
import AmenitiesListItem from '../AmenitiesListItem/AmenitiesListItem.jsx';
import styles from './AmenitiesList.css';

const AmenitiesList = (props) => {
  if (props.amenities.length > 8) {
    props.amenities = props.amenities.slice(0, 8);
  }
  const listItems = props.amenities.map((amenity, index) => {
    return (
      <AmenitiesListItem key={index} amenity={amenity}/>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Property Amenities</div>
      <div className={styles.list}>
        {listItems}
      </div>
      <div className={styles.show} onClick={props.showModal}>
      Show more
      </div>
    </div>
  );
};

export default AmenitiesList;