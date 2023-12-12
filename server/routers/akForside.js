const express = require('express');
const akForsideRouter = express.Router();
const aktivitetController = require('../controllers/aktivitet-controller');
const eventController = require('../controllers/event-controller');

// Get all activities for an event
akForsideRouter.get('/getActivity', aktivitetController.getAllAktivityData);
akForsideRouter.get('/adminForside', eventController.getAllEventData);
akForsideRouter.get('/userForside', eventController.getAllEventData);
akForsideRouter.get('/userActivity', aktivitetController.getAllAktivityData);

module.exports = akForsideRouter;
