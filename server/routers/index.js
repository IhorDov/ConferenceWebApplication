const express = require('express');
const router = express.Router();
const rootRouter = require('./root');
const eventRouter = require('./eventroute');
const aktivitetRouter = require('./aktivitet');
const akForside = require('./akForside');
const excelRouter = require('./excelroute');
const userRouter = require('./users');
const adminRouter = require('./admins');
const inputRouter = require('./inforouter');
const participantRouter = require('./participantroute');

router.use('/users', userRouter);
router.use('/admins', adminRouter);
router.use('/uploadExcel', excelRouter);
router.use(rootRouter);
router.use('/events', eventRouter);
router.use('/aktivitet', aktivitetRouter);
router.use('/getData', akForside);
router.use('/info', inputRouter);
router.use('/par', participantRouter);

module.exports = router;
