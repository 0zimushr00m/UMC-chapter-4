const express = require('express');
const app = express();

const reviewRouter = require('./routes/review.routes');
const missionRouter = require('./routes/mission.routes'); // ✅ 추가
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/reviews', reviewRouter);
app.use('/', missionRouter); // ✅ 추가

app.use(errorHandler);

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});
