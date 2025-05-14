function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || '서버 내부 오류 발생!',
  });
}

module.exports = errorHandler;
