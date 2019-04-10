import React from 'react';
import styles from './IndividualPhoto.css';

const IndividualPhoto = props => {
  return (
    <div className={styles.photo}>
      <img
        data-test={`dt${props.index}`}
        src={props.photo}
        height="50"
        width="51.0469"
        onClick={props.handleClick}
        style={props.style}
        className={styles.image}
      />
    </div>
  );
};

export default IndividualPhoto;
