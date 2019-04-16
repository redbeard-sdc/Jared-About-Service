/* eslint-disable camelcase */
const mongoose = require('mongoose');
const {
  generateRoomFeatures,
  generateAmenities,
  getNumberForRatings,
  hotelNameGenerator,
  generateHotelStyle
} = require('./utils.js');

const mongoURI = process.env.DB_URI || 'mongodb://database/hotels';
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to db');
});

// METHODS FOR SERVER ROUTES
const getAllHotels = () => {
  return Hotel.find()
    .then(results => {
      return results;
    })
    .catch(console.log);
};

const getHotel = name => {
  return Hotel.find({ hotel_name: name })
    .then(results => {
      return results;
    })
    .catch(console.log);
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
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley6.jpg'
  ];

  let [cleanlinessRating, locationRating, serviceRating, valueRating] = [
    getNumberForRatings(),
    getNumberForRatings(),
    getNumberForRatings(),
    getNumberForRatings()
  ];

  let overallRating = Math.floor(
    (cleanlinessRating + locationRating + serviceRating + valueRating) / 4
  );

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

  hotel.save(function(err) {
    if (err) {
      return handleError(err);
    }
  });
}

const hotel = new Hotel({
  _id: new mongoose.Types.ObjectId(),
  hotel_name: 'Stanley Hotel',
  hotel_amenities: [
    'Restaurant',
    'Free parking',
    'Free Internet',
    'Bar/Lounge',
    'Banquet Room',
    'Conference Facilities',
    'Meeting rooms',
    'Multilingual Staff',
    'Non-smoking hotel',
    'Pets Allowed',
    'Wheelchair access'
  ],
  room_features: [
    'Accessible rooms',
    'Family Rooms',
    'Non-smoking rooms',
    'Suites'
  ],
  hotel_style: ['Great View', 'Charming'],
  hotel_class: 4,
  hotel_link: 'Visit hotel website',
  about: `The Stanley Hotel is a luxurious historic landmark hotel
         in a spectacular mountain-view location, offering old-world
         charm matched with the latest of modern amenities. Take a
         ghosts and history tour... Enjoy free wireless Internet access
         throughout the property... Indulge in our full-service spa...
         Experience Cascades Restaurant... Savor a Starbucks’ Coffee...
         Or just relax and enjoy the view from your luxurious room, suite
         or private villa! Come, experience The Stanley Hotel: 7,500 feet
         above the ordinary in beautiful Estes Park, an hour from Denver
         and minutes from Rocky Mountain National Park.The Stanley Hotel
         is a luxurious historic landmark hotel in a spectacular mountain-view
         location, offering old-world charm matched with the latest of modern
         amenities`,
  photos: [
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley1.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley2.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley3.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley4.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley5.jpg',
    'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley6.jpg'
  ],
  ratings: {
    overall: 4,
    location: 4,
    cleanliness: 4,
    service: 4,
    value: 3
  }
});

hotel.save(function(err) {
  if (err) {
    return handleError(err);
  }
});

module.exports.getAllHotels = getAllHotels;
module.exports.getHotel = getHotel;
