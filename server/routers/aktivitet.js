const express = require('express');
const aktivitetRouter = express.Router();
const aktivitetController = require('../controllers/aktivitet-controller');

// Create an event
aktivitetRouter.post('/', aktivitetController.createAktivitet);

// Get an activity by ID
aktivitetRouter.get('/getActivityId/:ak_id', aktivitetController.getAkById);
aktivitetRouter.get('/userGetActId/:ak_id', aktivitetController.getAkById);
// aktivitetRouter.get('/userGetActByKonId/:kon_id', aktivitetController.getAllAktivityData);

// Update an event by ID
aktivitetRouter.put('/:ak_id', aktivitetController.putAktivitetById);

module.exports = aktivitetRouter;
