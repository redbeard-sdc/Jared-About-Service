import React from 'react';
import RoomFeaturesListItem from '../RoomFeaturesListItem/RoomFeaturesListItem.jsx';
import styles from './RoomFeaturesList.css';

const RoomFeaturesList = (props) => {
  const listItems = props.features.map((feature) => {
    return (
      <RoomFeaturesListItem feature={feature}/>
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