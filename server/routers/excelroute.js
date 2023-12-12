const express = require('express');
const router = express.Router();
const excelController = require('../controllers/excel-controller');
const upload = require('../config/multerConfig');
const excelModel = require('../models/excel-model');

router.post(
    '/post',
    upload.single('uploadedFile'),
    excelController.exelHandler
);

module.exports = router;
