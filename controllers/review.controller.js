const { getReviewsByUser } = require('../services/review.service');

// GET /reviews/:userId
async function getMyReviews(req, res, next) {
  try {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) throw new Error('userId는 숫자여야 합니다.');

    const reviews = await getReviewsByUser(userId);

    res.json({
      success: true,
      message: '리뷰 목록 조회 성공!',
      data: reviews,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getMyReviews };
