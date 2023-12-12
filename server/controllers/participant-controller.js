const parModel = require('../models/participant-model');

const getParticipantsArray = (req, res) => {
    const kon_id = req.params.kon_id;
    console.log('Reached getParticipant Controller! Kon_ID is:', kon_id);

    parModel.getParticipants(kon_id, (err, result) => {
        if (err) {
            res.status(500);
        } else {
            res.json(result);
        }
    });
};

const getParticipantsFullArray = (req, res) => {
    const kon_id = req.params.kon_id;
    console.log(
        'Reached getParticipantsFullArray Controller! Kon_ID is:',
        kon_id
    );
    parModel.getParticipantsFull(kon_id, (err, result) => {
        if (err) {
            res.status(500);
        } else {
            res.json(result);
        }
    });
};

module.exports = { getParticipantsArray, getParticipantsFullArray };
