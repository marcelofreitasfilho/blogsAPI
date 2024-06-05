const { userService } = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await userService.createUser(displayName, email, password, image);

  return res.status(status).json(data);
};

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();

  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserById(id);

  return res.status(status).json(data);
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};