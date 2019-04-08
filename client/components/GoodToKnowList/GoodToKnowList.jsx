import React from 'react';
import styles from './GoodToKnowList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';

const GoodToKnowList = (props) => {
  const stars = (hotelClass) => {
    let result = [];
    for (let i = 0; i < hotelClass; i++) {
      result.push(
        <FontAwesomeIcon key={i} icon={faStar}/>
      );
    }
    return result;
  };

  return (
    <div className={styles.container}> 
      <div className={styles.heading} data-test="heading-main">
      Good To Know
      </div>
      <div className={styles.list}>
        <div className={styles.left}>
          <div className={styles.style} data-test="heading-style">
          HOTEL STYLE
          </div>
          <div>
            <div className={styles.text} data-test="hotel-style1">
              {props.hotelStyle[0]}
            </div>
            <div className={styles.text} data-test="hotel-style2">
              {props.hotelStyle[1]}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.style} data-test="heading-class">
            HOTEL CLASS
            <span className={styles.span}><FontAwesomeIcon icon={faInfoCircle}/></span>
          </div>
          <div className={styles.style} data-test="star-count">
            {stars(props.hotelClass)}
          </div>
        </div>
      </div>
    </div>
  );
};




export default GoodToKnowList;