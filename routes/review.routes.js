const express = require('express');
const router = express.Router();
const { getMyReviews } = require('../controllers/review.controller');

// GET /reviews/:userId
router.get('/:userId', getMyReviews);

module.exports = router;
