import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Photos.css';

const Photos = (props) => {
  return (
    <div className={styles.container}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley5.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley6.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Photos;