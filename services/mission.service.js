const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 특정 가게의 미션 목록 조회
async function getMissionsByStore(storeId) {
  const missions = await prisma.mission.findMany({
    where: { storeId },
    include: { store: true },
  });
  return missions;
}

// 특정 유저의 '진행중' 미션 조회
async function getOngoingMissionsByUser(userId) {
  const missions = await prisma.mission.findMany({
    where: {
      userId,
      status: '진행중',
    },
    include: { store: true },
  });
  return missions;
}

// 특정 미션 완료 처리
async function completeMission(missionId) {
  const mission = await prisma.mission.findUnique({
    where: { id: missionId },
  });

  if (!mission) {
    const error = new Error('해당 미션이 존재하지 않습니다.');
    error.status = 404;
    throw error;
  }

  const updated = await prisma.mission.update({
    where: { id: missionId },
    data: { status: '완료' },
  });

  return updated;
}

module.exports = {
  getMissionsByStore,
  getOngoingMissionsByUser,
  completeMission,
};
