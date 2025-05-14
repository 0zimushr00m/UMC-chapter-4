const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 특정 유저가 작성한 리뷰 목록 가져오기
async function getReviewsByUser(userId) {
  const reviews = await prisma.review.findMany({
    where: { userId },
    include: { user: true },
  });

  return reviews;
}

module.exports = { getReviewsByUser };
