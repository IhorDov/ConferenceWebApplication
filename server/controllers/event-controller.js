const eventModel = require('../models/event.model');
const db = require('../config/database');

class EventController {
    async createEvent(req, res) {
        // Extract user data from the request body or other sources
        const navn = req.body.navn;
        const dato = req.body.dato;
        const adresse = req.body.adresse;

        // Call the insertUser function to add the event to the database
        eventModel.insertEvent(navn, dato, adresse, (err, kon_id) => {
            if (err) {
                console.error('Error inserting event:', err);
                // Handle the error, e.g., send an error response to the client
                res.status(500).json({ error: 'Error creating event' });
            } else {
                console.log('Event inserted successfully with ID:', kon_id);
                res.status(201).json({
                    message: 'Event created successfully',
                    kon_id: kon_id,
                });
            }
        });
    }

    async getAllEventData(req, res) {
        console.log('I am in getAllEventData controller');

        const sql = 'SELECT * FROM konference';

        db.query(sql, (err, results) => {
            if (err) {
                console.error('Error fetching conferences:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json(results);
            console.log('results from getAllEventData controller', results);
        });
    }

    async getEventById(req, res) {
        const kon_id = req.params.kon_id;

        // console.log('I am in getEventById controller');

        eventModel.selectById(kon_id, (err, results) => {
            if (err) {
                console.error('Error sending data:', err);
                res.status(500).json({ error: 'Error sending data' });
            } else {
                if (results && results.length > 0) {
                    // Check if results is defined and not empty
                    console.log(
                        'Data from getEventById controller selected successfully'
                    );

                    // Parse the date string and format it
                    const rawDate = results[0].dato;
                    const formattedDate = new Date(rawDate).toLocaleString();

                    const eventData = {
                        id: kon_id,
                        name: results[0].navn,
                        date: formattedDate,
                        address: results[0].adresse,
                    };

                    res.json(eventData);
                } else {
                    console.error(
                        'No data found for the given event_id:',
                        kon_id
                    );
                    res.status(404).json({ error: 'Event not found' });
                }
            }
        });
    }

    async putEventById(req, res) {
        const event_id = req.params.kon_id;
        const updatedEventData = req.body;

        eventModel.UpdateById(event_id, updatedEventData, (err, updatedKon) => {
            if (err) {
                console.error('Error updating event:', err);
                return res.status(500).json({ error: 'Error updating event' });
            }
            res.json(updatedKon);
        });
    }
}

module.exports = new EventController();
