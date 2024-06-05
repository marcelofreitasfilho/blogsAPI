const { User } = require('../models');
const userSchema = require('../validations/user.validation');
const { generateToken } = require('../utils/generateToken');

const createUser = async (displayName, email, password, image) => {
  const { error } = userSchema.validate([{ displayName, email, password }]);
  if (error) {
    const status = error.details[0].message.split('&')[0];
    const message = error.details[0].message.split('&')[1];
    return { status, data: { message } };
  }

  const foundUser = await User.findOne({ where: { email } });
  if (foundUser) {
    return {
      status: '409',
      data: { message: 'User already registered' },
    };
  }

  const user = await User.create({ displayName, email, password, image });
  delete user.password;
  const token = generateToken({ user });

  return { status: '201', data: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: '200', data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) {
    return { status: '404', data: { message: 'User does not exist' } };
  }

  return { status: '200', data: user };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};