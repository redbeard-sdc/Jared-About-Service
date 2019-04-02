import React from 'react';
import styles from './GoodToKnowList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';

const GoodToKnowList = (props) => {
  const stars = (hotelClass) => {
    if (hotelClass === 1) {
      return (
        <div>
          <FontAwesomeIcon icon={faStar}/>
        </div>
      );
    }
    if (hotelClass === 2) {
      return (
        <div>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
      );
    }
    if (hotelClass === 3) {
      return (
        <div>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
      );
    }
    if (hotelClass === 4) {
      return (
        <div>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
      );
    }
    if (hotelClass === 5) {
      return (        
        <div>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}> 
      <div className={styles.heading}>
      Good To Know
      </div>
      <div className={styles.list}>
        <div className={styles.left}>
          <div className={styles.style}>
          HOTEL STYLE
          </div>
          <div>
            <div className={styles.text}>
              {props.hotelStyle[0]}
            </div>
            <div className={styles.text}>
              {props.hotelStyle[1]}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.style}>
            HOTEL CLASS
            <span className={styles.span}><FontAwesomeIcon icon={faInfoCircle}/></span>
          </div>
          <div className={styles.style}>
            {stars(props.hotelClass)}
          </div>
        </div>
      </div>
    </div>
  );
};




export default GoodToKnowList;