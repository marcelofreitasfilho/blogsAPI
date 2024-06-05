const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const findUser = async (email, password) => {
  if (!email || !password) {
    return { status: 400, data: { message: 'Some required fields are missing' } };
  }
  const user = await User.findOne(
    { where: { email, password }, attributes: { exclude: ['password'] } },
  );

  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }

  const token = generateToken({ user });

  return { status: 200, data: { token } };
};

module.exports = {
  findUser,
};