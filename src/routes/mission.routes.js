const express = require('express');
const router = express.Router();
const {
  getMissionsByStoreController,
  getOngoingMissionsController,
  completeMissionController,
} = require('../../controllers/mission.controller');

/**
 * @swagger
 * /api/v1/stores/{storeId}/missions:
 *   get:
 *     summary: 특정 가게의 미션 목록 조회
 *     description: storeId에 해당하는 가게의 미션들을 조회합니다.
 *     parameters:
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: 가게 ID
 *     responses:
 *       200:
 *         description: 미션 목록 조회 성공
 *         content:
 *           application/json:
 *             example:
 *               resultType: "SUCCESS"
 *               error: null
 *               success:
 *                 data:
 *                   - id: 1
 *                     title: "12,000원 이상 식사"
 *                     reward: 500
 *       500:
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             example:
 *               resultType: "FAIL"
 *               error:
 *                 errorCode: "M001"
 *                 reason: "해당 가게가 존재하지 않습니다."
 *               success: null
 */
router.get('/api/v1/stores/:storeId/missions', getMissionsByStoreController);

/**
 * @swagger
 * /api/v1/users/{userId}/missions:
 *   get:
 *     summary: 특정 유저의 진행 중 미션 목록 조회
 *     description: userId에 해당하는 유저가 진행 중인 미션을 반환합니다.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: 유저 ID
 *     responses:
 *       200:
 *         description: 진행 중 미션 조회 성공
 *         content:
 *           application/json:
 *             example:
 *               resultType: "SUCCESS"
 *               error: null
 *               success:
 *                 data:
 *                   - id: 2
 *                     title: "카페 이용"
 *                     status: "ONGOING"
 *       500:
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             example:
 *               resultType: "FAIL"
 *               error:
 *                 errorCode: "M002"
 *                 reason: "유저가 존재하지 않음"
 *               success: null
 */
router.get('/api/v1/users/:userId/missions', getOngoingMissionsController);

/**
 * @swagger
 * /api/v1/missions/{missionId}/complete:
 *   patch:
 *     summary: 미션 완료 처리
 *     description: missionId에 해당하는 미션을 완료 상태로 변경합니다.
 *     parameters:
 *       - in: path
 *         name: missionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: 미션 ID
 *     responses:
 *       200:
 *         description: 미션 완료 성공
 *         content:
 *           application/json:
 *             example:
 *               resultType: "SUCCESS"
 *               error: null
 *               success:
 *                 message: "미션 완료 처리됨"
 *       500:
 *         description: 미션 완료 실패
 *         content:
 *           application/json:
 *             example:
 *               resultType: "FAIL"
 *               error:
 *                 errorCode: "M003"
 *                 reason: "이미 완료된 미션입니다."
 *               success: null
 */
router.patch('/api/v1/missions/:missionId/complete', completeMissionController);

module.exports = router;
