const express = require('express');
const participantrouteRouter = express.Router();
const parController = require('../controllers/participant-controller');

participantrouteRouter.get('/:kon_id', parController.getParticipantsArray);
participantrouteRouter.get(
    '/full:kon_id',
    parController.getParticipantsFullArray
);
participantrouteRouter.get(
    '/users/:kon_id',
    parController.getParticipantsArray
);

module.exports = participantrouteRouter;
