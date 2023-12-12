const express = require('express');
const eventRoute = express.Router();
const eventController = require('../controllers/event-controller');
const aktivitetController = require('../controllers/aktivitet-controller');

// Create an event
eventRoute.post('/', eventController.createEvent);
eventRoute.get('/:kon_id', eventController.getEventById);
eventRoute.get(
    '/userGetActByKonId/:kon_id',
    aktivitetController.getAllAktivityDataNew
);
eventRoute.put('/:kon_id', eventController.putEventById);

module.exports = eventRoute;
