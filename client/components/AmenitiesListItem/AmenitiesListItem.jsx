import React from 'react';
import styles from './AmenitiesListItem.css';

const AmenitiesListItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>i</span>
      <span className={styles.text}>{props.amenity}</span>
    </div>
  );
};

export default AmenitiesListItem;