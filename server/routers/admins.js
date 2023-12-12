const express = require('express');
const adminRouter = express.Router();
const adminController = require('../controllers/admins-controller');

adminRouter.route('/register').post(adminController.adminRegistration);

adminRouter.route('/login').post(adminController.adminLogin);
adminRouter.route('/logout').post(adminController.adminLogout);
adminRouter.route('/reset').post(adminController.adminReset);
adminRouter.route('/newpas/:adm_email').put(adminController.adminNewPassword);
adminRouter.route('/delete/:adminId').delete(adminController.adminDelete);

module.exports = adminRouter;
