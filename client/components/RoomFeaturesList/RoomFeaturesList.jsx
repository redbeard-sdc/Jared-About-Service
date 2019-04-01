import React from 'react';
import RoomFeaturesListItem from '../RoomFeaturesListItem/RoomFeaturesListItem.jsx';

const RoomFeaturesList = (props) => {
  const listItems = props.features.map((feature) => {
    return (
      <RoomFeaturesListItem feature={feature}/>
    );
  });

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default RoomFeaturesList;