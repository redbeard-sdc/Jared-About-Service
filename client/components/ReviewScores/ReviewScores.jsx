import React from 'react';
import styles from './ReviewScores.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle as faDotCircleRegular, faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';

const ReviewScores = (props) => { 
  const getBubbleScore = (score) => {
    let result = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= score) {
        result.push(<FontAwesomeIcon key={i} icon={faDotCircleRegular}/>);
      } else {
        result.push(<FontAwesomeIcon key={i} icon={faCircleRegular}/>);
      }
    }
    return result;
  };
  
  let overall = getBubbleScore(props.ratings.overall);
  let location = getBubbleScore(props.ratings.location);
  let cleanliness = getBubbleScore(props.ratings.cleanliness);
  let service = getBubbleScore(props.ratings.service);
  let value = getBubbleScore(props.ratings.value);

  return (
    <div>
      <div className={styles.overall}>
        <span className={styles.number}>
          {props.ratings.overall}.0
        </span>
        <span className={styles.text}>
          <div>
            Very Good
          </div>
          {overall}
          <span className={styles.reviewers}>
            3,184 reviews
          </span>  
        </span>
      </div>
      <div className={styles.subratings}>
        <div className={styles.subs}>
          <div className={styles.subbubs}>
            <span className={styles.bubbles}> 
              {location}
            </span>
          </div>
          <div className={styles.type}>
            Location
          </div>
        </div>
        <div className={styles.subs}>
          <div className={styles.subbubs}>
            <span className={styles.bubbles}> 
              {cleanliness}
            </span>
          </div>
          <div className={styles.type}>
            Cleanliness
          </div>
        </div>
        <div className={styles.subs}>
          <div className={styles.subbubs}>
            <span className={styles.bubbles}> 
              {service}
            </span>
          </div>
          <div className={styles.type}>
            Service
          </div>
        </div>
        <div className={styles.subs}>
          <div className={styles.subbubs}>
            <span className={styles.bubbles}> 
              {value}
            </span>
          </div>
          <div className={styles.type}>
            Value
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default ReviewScores;