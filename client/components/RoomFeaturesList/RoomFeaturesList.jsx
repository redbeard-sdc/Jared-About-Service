import React from 'react';
import RoomFeaturesListItem from '../RoomFeaturesListItem/RoomFeaturesListItem.jsx';
import styles from './RoomFeaturesList.css';

const RoomFeaturesList = (props) => {
  if (props.features.length > 8) {
    props.features = props.features.slice(0, 8);
  }
  const listItems = props.features.map((feature, index) => {
    return (
      <RoomFeaturesListItem key={index} feature={feature}/>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
      Room Features
      </div>
      <div className={styles.list}>
        {listItems}
      </div>
    </div>
  );
};

export default RoomFeaturesList;