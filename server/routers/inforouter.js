const express = require('express');
const inputController = require('../controllers/input-controller');

const inforouterRouter = express.Router();

inforouterRouter.post('/saveData', inputController.TablesController);
inforouterRouter.get('/saveData/:kon_id', inputController.getData);

module.exports = inforouterRouter;
