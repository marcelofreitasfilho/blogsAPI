const router = require('express').Router();
const { userController } = require('../controllers');
const validateToken = require('../utils/validateToken');

router.post('/', userController.create);
router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUserById);

module.exports = router;