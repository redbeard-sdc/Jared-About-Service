import React from 'react';
import styles from './HotelLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

const HotelLink = props => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Hotel Links</div>
      <div className={styles.link}>
        <span className={styles.link}>
          <span className={styles.desktop}>
            <FontAwesomeIcon icon={faDesktop} />
          </span>
          <span className={styles.text} data-test="link-text">
            Visit hotel website
          </span>
          <span>⬈</span>
        </span>
      </div>
    </div>
  );
};

export default HotelLink;
