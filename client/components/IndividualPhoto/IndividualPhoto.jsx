import React from 'react';
import styles from './IndividualPhoto.css';

const IndividualPhoto = (props) => {
  return (
    <div className={styles.photo} >
      <img src={props.photo} height="50" width="51.0469" onClick={props.handleClick}/>
    </div>
  );
};

export default IndividualPhoto;