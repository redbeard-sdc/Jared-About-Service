import React from 'react';
import styles from './ReviewScores.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle as faDotCircleRegular, faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';

// rating is i
// return  <span className={styles.bubbles}>
// { new Array (i).map((item) => {
//   return <FontAwesomeIcon icon={faDotCircleRegular}/>
//   })
// }
// {
//   new Array(5-1).map((item) => {
//     return <FontAwesomeIcon icon={faCircleRegular}/>
//   })
// }
//  </span> 

const ReviewScores = (props) => { 
  let bubbleScore1 = (
    <span className={styles.bubbles}>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>  
    </span>
  );

  let bubbleScore2 = (
    <span className={styles.bubbles}>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>  
    </span>
  );

  let bubbleScore3 = (
    <span className={styles.bubbles}>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>  
    </span>
  );

  let bubbleScore4 = (
    <span className={styles.bubbles}>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faCircleRegular}/>  
    </span>
  );

  let bubbleScore5 = (
    <span className={styles.bubbles}>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>
      <FontAwesomeIcon icon={faDotCircleRegular}/>  
    </span>
  );
  
  let overall, location, cleanliness, service, value;

  //overall bubbles
  if (props.ratings.overall === 1) {
    overall = bubbleScore1;
  }
  if (props.ratings.overall === 2 ) {
    overall = bubbleScore2;
  }
  if (props.ratings.overall === 3 ) {
    overall = bubbleScore3;
  }
  if (props.ratings.overall === 4 ) {
    overall = bubbleScore4;
  }
  if (props.ratings.overall === 5 ) {
    overall = bubbleScore5;
  }

  //location bubbles
  if (props.ratings.location === 1) {
    location = bubbleScore1;
  }
  if (props.ratings.location === 2 ) {
    location = bubbleScore2;
  }
  if (props.ratings.location === 3 ) {
    location = bubbleScore3;
  }
  if (props.ratings.location === 4 ) {
    location = bubbleScore4;
  }
  if (props.ratings.location === 5 ) {
    location = bubbleScore5;
  }

  //cleanliness bubbles
  if (props.ratings.cleanliness === 1) {
    cleanliness = bubbleScore1;
  }
  if (props.ratings.cleanliness === 2 ) {
    cleanliness = bubbleScore2;
  }
  if (props.ratings.cleanliness === 3 ) {
    cleanliness = bubbleScore3;
  }
  if (props.ratings.cleanliness === 4 ) {
    cleanliness = bubbleScore4;
  }
  if (props.ratings.cleanliness === 5 ) {
    cleanliness = bubbleScore5;
  }

  //service bubbles
  if (props.ratings.service === 1) {
    service = bubbleScore1;
  }
  if (props.ratings.service === 2 ) {
    service = bubbleScore2;
  }
  if (props.ratings.service === 3 ) {
    service = bubbleScore3;
  }
  if (props.ratings.service === 4 ) {
    service = bubbleScore4;
  }
  if (props.ratings.service === 5 ) {
    service = bubbleScore5;
  }

  //ratings bubbles
  if (props.ratings.value === 1) {
    value = bubbleScore1;
  }
  if (props.ratings.value === 2 ) {
    value = bubbleScore2;
  }
  if (props.ratings.value === 3 ) {
    value = bubbleScore3;
  }
  if (props.ratings.value === 4 ) {
    value = bubbleScore4;
  }
  if (props.ratings.value === 5 ) {
    value = bubbleScore5;
  }

  return (
    <div>
      <div className={styles.overall}>
        <span className={styles.number}>
          4.0
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
            {location}
          </div>
          <div className={styles.type}>
            Location
          </div>
        </div>
        <div className={styles.subs}>
          <div className={styles.subbubs}>
            {cleanliness}
          </div>
          <div className={styles.type}>
            Cleanliness
          </div>
        </div>
        <div className={styles.subs}>
          <div className={styles.subbubs}>
            {service}
          </div>
          <div className={styles.type}>
            Service
          </div>
        </div>
        <div className={styles.subs}>
          <div className={styles.subbubs}>
            {value}
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



// const makeBubbleScores = (ratingsObj) => {
//   let result = {
//     overall: '',
//     location: '',
//     cleanliness: '',
//     service: '',
//     value: '',
//   };
//   for (let prop in ratingsObj) {
//     if (ratingsObj[prop] === 1) {
//       result[prop] === bubbleScore1;
//     }
//     if (ratingsObj[prop] === 2) {
//       result[prop] === bubbleScore2;
//     }
//     if (ratingsObj[prop] === 3) {
//       result[prop] === bubbleScore3;
//     }
//     if (ratingsObj[prop] === 4) {
//       result[prop] === bubbleScore4;
//     }
//     if (ratingsObj[prop] === 5) {
//       result[prop] === bubbleScore5;
//     }
//   }
// };