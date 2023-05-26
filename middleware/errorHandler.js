const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation Failed",
        massage: err.message,
        stackTrace: err.stack,
      });
      break;

    case 404:
      res.json({
        title: "Not Found",
        massage: err.message,
        stackTrace: err.stack,
      });
      break;

    default: break;
  }
};
module.exports = errorHandler;
