const express = require('express');
const router = express.Router();
const { getMyReviews } = require('../../controllers/review.controller');

/**
 * @swagger
 * /api/v1/reviews/my:
 *   get:
 *     summary: 내가 작성한 리뷰 목록 조회
 *     description: 로그인한 사용자(임시 userId=1)가 작성한 리뷰 목록을 반환합니다.
 *     responses:
 *       200:
 *         description: 리뷰 목록 조회 성공
 *         content:
 *           application/json:
 *             example:
 *               resultType: "SUCCESS"
 *               error: null
 *               success:
 *                 data:
 *                   - id: 1
 *                     content: "맛있었어요!"
 *                     rating: 4.5
 *       500:
 *         description: 서버 에러
 *         content:
 *           application/json:
 *             example:
 *               resultType: "FAIL"
 *               error:
 *                 errorCode: "E001"
 *                 reason: "서버 내부 오류"
 *               success: null
 */

router.get('/api/v1/reviews/my', getMyReviews);


// ✅ Swagger 경로와 맞추기 위해 '/my'로 수정
router.get('/api/v1/reviews/my', getMyReviews);


module.exports = router;
