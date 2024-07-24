exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  }
  next(err);
};

exports.handleSQLErrors = (err, req, res, next) => {
  if (err.code === '23503') {
    res.status(404).send({ message: '23503 not found' });
  } else if (err.code === '23502') {
    res.status(400).send({ message: 'passed information insufficient' });
  } else if (err.code === '22P02') {
    res.status(400).send({ message: "Item ID doesn't exist" });
  } else if (err.code === '08P01') {
    res.status(400).send({ message: 'bad request' });
  } else {
    next(err);
  }
};
