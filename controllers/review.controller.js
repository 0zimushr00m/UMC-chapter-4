const { getReviewsByUser } = require('../services/review.service');

async function getMyReviews(req, res) {
  try {
    // 로그인된 유저라고 가정 (임시로 userId = 1)
    const userId = 1;

    const reviews = await getReviewsByUser(userId);

    res.status(200).json({
      resultType: 'SUCCESS',
      error: null,
      success: {
        data: reviews,
      },
    });
  } catch (err) {
    res.status(500).json({
      resultType: 'FAIL',
      error: {
        errorCode: 'E001',
        reason: err.message || '서버 오류',
      },
      success: null,
    });
  }
}

module.exports = { getMyReviews };
