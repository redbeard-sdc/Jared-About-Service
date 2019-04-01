import React from 'react';

const GoodToKnowList = (props) => {
  return (
    <div>
      <ul>
        <h5>Hotel Style</h5>
        <li>{props.hotelStyle[0]}</li>
        <li>{props.hotelStyle[1]}</li>
      </ul>
      <div>
        <h5>Hotel Class</h5>
      </div>
    </div>
  );
};




export default GoodToKnowList;