const express = require('express');
const router = express.Router();
const hotelsRoute = require('./hotels');

router.use('/hotel', hotelsRoute);

module.exports = router;