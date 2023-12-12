const express = require('express');
const userRouter = express.Router();
const verifyToken = require('../middlewares/verifyToken');

const userController = require('../controllers/users-controller');

userRouter.route('/login/:kon_id').post(userController.userLogin);
userRouter.route('/logout/:kon_id').post(userController.userLogout);
userRouter.route('/register/:kon_id').post(userController.userRegistration);
userRouter.route('/getToken').get(verifyToken);

module.exports = userRouter;
