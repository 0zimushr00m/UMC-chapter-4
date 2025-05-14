// ✅ controllers/mission.controller.js

const {
  getMissionsByStore,
  getOngoingMissionsByUser,
  completeMission,
} = require('../services/mission.service');

// 특정 가게의 미션 목록 컨트롤러
async function getMissionsByStoreController(req, res, next) {
  try {
    const storeId = parseInt(req.params.storeId);
    if (isNaN(storeId)) throw new Error('storeId는 숫자여야 해요!');

    const missions = await getMissionsByStore(storeId);
    res.json({
      success: true,
      message: '가게 미션 목록 조회 성공!',
      data: missions,
    });
  } catch (err) {
    next(err);
  }
}

// 특정 유저의 진행중 미션 목록 컨트롤러
async function getOngoingMissionsController(req, res, next) {
  try {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) throw new Error('userId는 숫자여야 해요!');

    const missions = await getOngoingMissionsByUser(userId);
    res.json({
      success: true,
      message: '진행중인 미션 목록 조회 성공!',
      data: missions,
    });
  } catch (err) {
    next(err);
  }
}

// 미션 완료 처리 컨트롤러
async function completeMissionController(req, res, next) {
  try {
    const missionId = parseInt(req.params.missionId);
    if (isNaN(missionId)) throw new Error('missionId는 숫자여야 해요!');

    const updatedMission = await completeMission(missionId);
    res.json({
      success: true,
      message: '미션 완료 처리 성공!',
      data: updatedMission,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getMissionsByStoreController,
  getOngoingMissionsController,
  completeMissionController,
};