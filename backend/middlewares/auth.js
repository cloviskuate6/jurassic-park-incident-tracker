module.exports = function (req, res, next) {
  const token = req.headers.authorization;
  if (!token || token !== 'Bearer admin-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
