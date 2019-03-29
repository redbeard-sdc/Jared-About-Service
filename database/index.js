/* eslint-disable camelcase */
const faker = require ('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotels');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to db');
});

// METHODS FOR SERVER ROUTES
const getAllHotels = () => {
  return new Promise((resolve, reject) => {
    Hotel.find((err, results) => {
      if(err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  });
};

const getHotel = (name) => {
  return new Promise((resolve, reject) => {
    Hotel.find({hotel_name: name}, (err, results) =>{
      if(err){
        reject(err)
      } else {
        resolve(results)
      }
    })
  });
};

// METHODS FOR GENERATING FAKE DATA
const hotelNameGenerator = () => {
  let cityName = faker.address.city();
  let suffixes = ['Inn', 'Lodge', 'Hotel', 'Resort', 'Suites'];
  let randomIndex = Math.floor(Math.random() * suffixes.length); 
  let hotelName = '' + cityName + ' ' + suffixes[randomIndex];
  return hotelName;
}

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

// SCHEMA DESIGN
const hotelSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  hotel_name: String,
  hotel_amenities: [String],
  room_features: [String],
  hotel_style: [String],
  hotel_class: Number,
  hotel_link: String,
  about: String,
  photos: [String],
  ratings: {
    overall: Number,
    location: Number,
    cleanliness: Number,
    service: Number,
    value: Number 
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

// SCRIPT FOR SEEDING DB
for (let i = 0; i < 99; i++) {
  let hotelName = hotelNameGenerator();
  let hotelAmenities = generateAmenities();
  let roomFeatures = generateRoomFeatures();
  let hotelStyle = generateHotelStyle();
  let hotelClass = Math.floor(Math.random() * (6 - 1) + 1);
  let hotelLink = 'Visit Hotel Website';
  let about = `
  At vero eos et accusamus et iusto odio dignissimos ducimus qui 
  blanditiis praesentium voluptatum deleniti atque corrupti quos 
  dolores et quas molestias excepturi sint occaecati cupiditate non 
  provident, similique sunt in culpa qui officia deserunt mollitia 
  animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
  est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
  eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
  facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
  saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
  voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;
  let photoURLS = [
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley1.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley2.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley3.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley4.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley5.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley7.jpg'
  ];

  let [cleanlinessRating, locationRating, overallRating, serviceRating, valueRating] = [getNumberForRatings(), getNumberForRatings(), getNumberForRatings(), getNumberForRatings(), getNumberForRatings()];

  const hotel = new Hotel({
    _id: new mongoose.Types.ObjectId(),
    hotel_name: hotelName,
    hotel_amenities: hotelAmenities,
    room_features: roomFeatures,
    hotel_style: hotelStyle,
    hotel_class: hotelClass,
    hotel_link: hotelLink,
    about: about,
    photos: photoURLS,
    ratings: {
      overall: overallRating,
      location: locationRating,
      cleanliness: cleanlinessRating,
      service: serviceRating,
      value: valueRating 
    }
  });
  
  hotel.save(function (err) {
    if (err) return handleError(err);
  });
}


module.exports.getAllHotels = getAllHotels;
module.exports.getHotel = getHotel;








