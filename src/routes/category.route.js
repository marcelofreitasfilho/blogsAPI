const route = require('express').Router();
const { categoryController } = require('../controllers');
const validateToken = require('../utils/validateToken');

route.post('/', validateToken, categoryController.createCategory);
route.get('/', validateToken, categoryController.getAllCategories);

module.exports = route;