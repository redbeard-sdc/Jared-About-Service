import React from 'react';
import styles from './About.css';

const About = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {props.about}
      </div>
    </div>
  );
};

export default About;