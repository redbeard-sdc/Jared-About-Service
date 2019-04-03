import React from 'react';
import styles from './ReviewScores.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle as faDotCircleRegular, faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';

const ReviewScores = (props) => {
  return (
    <div className={styles.overall}>
      <span className={styles.number}>
        4.0
      </span>
      <span className={styles.text}>
        <div>
          Very Good
        </div>
        <span className={styles.bubbles}>
          <FontAwesomeIcon icon={faDotCircleRegular}/>
          <FontAwesomeIcon icon={faDotCircleRegular}/>
          <FontAwesomeIcon icon={faDotCircleRegular}/>
          <FontAwesomeIcon icon={faDotCircleRegular}/>
          <FontAwesomeIcon icon={faCircleRegular}/>
        </span>
      </span>
    </div>
  );
};

export default ReviewScores;