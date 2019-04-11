import React from 'react';
import styles from './AmenitiesListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCar, 
  faSmokingBan, 
  faCoffee, 
  faSwimmer, 
  faGlobe, 
  faWheelchair, 
  faUtensils, 
  faCocktail,
  faTshirt,
  faDog,
  faHotTub,
  faUsers,
  faUser
} from '@fortawesome/free-solid-svg-icons';

const AmenitiesListItem = (props) => {
  let amenityIcon;
  switch (props.amenity) {
  case 'Restaurant':
    amenityIcon = faUtensils;
    break;
  case 'Free parking':
    amenityIcon = faCar;
    break;
  case 'Bar/Lounge':
    amenityIcon = faCocktail;
    break;
  case 'Banquet Room':
  case 'Conference Facilities':
  case 'Meeting rooms':
    amenityIcon = faUsers;
    break;
  case 'Multilingual Staff':
  case 'Free Internet':
    amenityIcon = faGlobe;
    break;
  case 'Pool':
  case 'Heated pool':
  case 'Indoor pool':
    amenityIcon = faSwimmer;
    break;
  case 'Hot Tub':
    amenityIcon = faHotTub;
    break;
  case 'Breakfast included':
    amenityIcon = faCoffee;
    break;
  case 'Non-smoking hotel':
    amenityIcon = faSmokingBan;
    break;
  case 'Pets Allowed':
    amenityIcon = faDog;
    break;
  case 'Self-Serve Laundry':
  case 'Laundry Service':
    amenityIcon = faTshirt;
    break;
  case 'Wheelchair access':
    amenityIcon = faWheelchair;
    break;
  }
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={amenityIcon}/>
      </span>
      <span className={styles.text}>{props.amenity}
      </span>
    </div>
  );
};

export default AmenitiesListItem;
