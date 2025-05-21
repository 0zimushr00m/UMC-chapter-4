const express = require('express');
const app = express();

// 📦 Swagger 관련 추가
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/swagger'); // src 폴더에 swagger.js 파일이 있어야 함

// 📦 기존 라우터 및 미들웨어
const reviewRouter = require('./src/routes/review.routes');
const missionRouter = require('./src/routes/mission.routes'); // ✅ 추가
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

// ✅ Swagger 문서 라우터 추가
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ API 라우터 연결
app.use('/reviews', reviewRouter);
app.use('/', missionRouter); // ✅ 추가

// ✅ 에러 핸들러
app.use(errorHandler);

// ✅ 서버 실행
app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
  console.log('📘 Swagger Docs available at http://localhost:3000/api-docs');
});
