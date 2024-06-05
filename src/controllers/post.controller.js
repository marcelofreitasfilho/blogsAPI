const postService = require('../services/post.service');
const { getUserFromToken } = require('../utils/generateToken');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const id = getUserFromToken(req.headers.authorization);

  const { status, data } = await postService.createPost(title, content, categoryIds, id);

  return res.status(status).json(data);
};

module.exports = {
  createPost,
};