// METHODS FOR GENERATING FAKE DATA
const faker = require ('faker');

const hotelNameGenerator = () => {
  let cityName = faker.address.city();
  let suffixes = ['Inn', 'Lodge', 'Hotel', 'Resort', 'Suites'];
  let randomIndex = Math.floor(Math.random() * suffixes.length); 
  let hotelName = '' + cityName + ' ' + suffixes[randomIndex];
  return hotelName;
};

const getNumberForRatings = () => {
  return Math.floor(Math.random() * (5 - 1) + 1);
};

const generateAmenities = () => {
  const result = [];
  const amenities = [
    'Restaurant', 
    'Free parking', 
    'Bar/Lounge', 
    'Banquet Room', 
    'Conference Facilities', 
    'Meeting rooms', 
    'Multilingual Staff', 'Pool', 
    'Free High Speed Internet (WiFi)', 
    'Breakfast included', 
    'Heated pool', 
    'Hot Tub', 
    'Indoor pool', 
    'Non-smoking hotel', 
    'Pets Allowed', 
    'Self-Serve Laundry', 
    'Wheelchair access', 
    'Hot Tub', 
    'Laundry Service'
  ];

  let random = Math.floor(Math.random() * (amenities.length - 10) + 10);
  for (let i = 0; i < random; i++) {
    result.push(amenities[i]); 
  }
  return result;
};

var generateRoomFeatures = () => {
  const result = [];
  const features = [
    'Accessible rooms', 
    'Microwave', 
    'Refrigerator in room', 
    'Kitchenette', 
    'Air conditioning', 
    'Family Rooms', 
    'Non-smoking rooms', 
    'Smoking rooms available', 
    'Suites'
  ];

  let random = Math.floor(Math.random() * (features.length - 4) + 4);
  for (let i = 0; i < random; i++) {
    result.push(features[i]); 
  }
  return result;
};

const generateHotelStyle = () => {
  const result = [];
  const styles = [
    'Great View', 
    'Safe', 
    'Quaint', 
    'Charming', 
    'Historic Hotel', 
    'Great View', 
    'Business', 
    'Family', 
    'Ocean View', 
    'Beachfront', 
    'Mid-range', 
    'Quiet', 
    'Rustic'
  ];

  for (let i = 0; i < 2; i++) {
    let random = Math.floor(Math.random() * styles.length);
    if (!result.includes(styles[random])) {
      result.push(styles[random]); 
    }
  }
  return result;
};
module.exports = {
  generateAmenities: generateAmenities,
  generateHotelStyle: generateHotelStyle,
  generateRoomFeatures: generateRoomFeatures,
  getNumberForRatings: getNumberForRatings,
  hotelNameGenerator: hotelNameGenerator
};