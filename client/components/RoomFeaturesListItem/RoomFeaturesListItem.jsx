import React from 'react';
import styles from './RoomFeaturesListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const RoomFeaturesListItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faCheck}/>
      </span>
      <span className={styles.text}>{props.feature}
      </span>
    </div>
  );
};

export default RoomFeaturesListItem;