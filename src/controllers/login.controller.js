const { findUser } = require('../services/login.service');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await findUser(email, password);
  res.status(status).json(data);
};

module.exports = {
  userLogin,
};