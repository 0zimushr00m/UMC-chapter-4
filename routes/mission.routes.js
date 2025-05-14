const express = require('express');
const router = express.Router();

const {
  getMissionsByStoreController,
  getOngoingMissionsController,
  completeMissionController,
} = require('../controllers/mission.controller');

// 특정 가게의 미션 목록
router.get('/stores/:storeId/missions', getMissionsByStoreController);

// 특정 유저의 진행 중인 미션 목록
router.get('/users/:userId/missions', getOngoingMissionsController);

// 특정 미션을 완료 처리
router.patch('/missions/:missionId/complete', completeMissionController);

module.exports = router;
