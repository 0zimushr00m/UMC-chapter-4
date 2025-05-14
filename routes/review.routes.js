const express = require('express');
const router = express.Router();
const { getMyReviews } = require('../controllers/review.controller');

router.get('/:userId', getMyReviews);

module.exports = router; // ✅ 이 줄 꼭 있어야 해요!
