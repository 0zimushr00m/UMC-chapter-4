const express = require('express');
const app = express();

const reviewRouter = require('./routes/review.routes'); // 있다면
const missionRouter = require('./routes/mission.routes');
const errorHandler = require('./middlewares/errorHandler'); // 에러 미들웨어

app.use(express.json());

// 라우터 등록
app.use('/reviews', reviewRouter); // 있다면
app.use('/', missionRouter);

// 에러 처리 미들웨어 등록
app.use(errorHandler);

// 서버 실행
app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});
