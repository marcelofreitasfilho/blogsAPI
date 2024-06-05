const route = require('express').Router();
const postController = require('../controllers/post.controller');
const validateToken = require('../utils/validateToken');

route.post('/', validateToken, postController.createPost);

module.exports = route;