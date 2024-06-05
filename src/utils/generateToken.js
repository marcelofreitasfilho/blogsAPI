const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => {
  const tokensign = jwt.sign(payload, secret);

  return tokensign;
};

const getUserFromToken = (token) => {
  const decoded = jwt.verify(token.split(' ')[1], secret);

  return decoded.user.id;
};

module.exports = {
  generateToken,
  getUserFromToken,
};