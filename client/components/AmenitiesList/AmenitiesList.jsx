import React from 'react';
import AmenitiesListItem from '../AmenitiesListItem/AmenitiesListItem.jsx';

const AmenitiesList = (props) => {
  const listItems = props.amenities.map((amenity) => {
    return (
      <AmenitiesListItem amenity={amenity}/>
    );
  });

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default AmenitiesList;