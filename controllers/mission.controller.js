const {
  getMissionsByStore,
  getOngoingMissionsByUser,
  completeMission,
} = require('../services/mission.service');

// 특정 가게의 미션 목록 조회
async function getMissionsByStoreController(req, res, next) {
  try {
    const storeId = parseInt(req.params.storeId);
    if (isNaN(storeId)) {
      const error = new Error('storeId는 숫자여야 해요!');
      error.status = 400;
      throw error;
    }

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

// 특정 유저의 진행 중 미션 조회
async function getOngoingMissionsController(req, res, next) {
  try {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      const error = new Error('userId는 숫자여야 해요!');
      error.status = 400;
      throw error;
    }

    const missions = await getOngoingMissionsByUser(userId);

    res.json({
      success: true,
      message: '진행 중인 미션 목록 조회 성공!',
      data: missions,
    });
  } catch (err) {
    next(err);
  }
}

// 특정 미션 완료 처리
async function completeMissionController(req, res, next) {
  try {
    const missionId = parseInt(req.params.missionId);
    if (isNaN(missionId)) {
      const error = new Error('missionId는 숫자여야 해요!');
      error.status = 400;
      throw error;
    }

    const updated = await completeMission(missionId);

    res.json({
      success: true,
      message: '미션 완료 처리 성공!',
      data: updated,
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
