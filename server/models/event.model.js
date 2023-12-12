const mysql = require('mysql2');
const db = require('../config/database');

// db.connect();

const insertEvent = (name, date, adress, callback) => {
    const query =
        'INSERT INTO konference (navn, dato, adresse) VALUES (?, ?, ?)';
    db.query(query, [name, date, adress], (err, results) => {
        if (err) {
            console.error('Error inserting event:', err, kon_id);
            callback(err);
            return;
        } else {
            const kon_id = results.insertId; // Get the auto-generated event_id
            console.log('Event inserted successfully with ID:', kon_id);
            callback(null, kon_id); // Pass the eventId back to the callback
        }
    });
};

const getAllEventData = (callback) => {
    const query = 'SELECT kon_id, navn FROM konference';
    db.query(query, (err) => {
        if (err) {
            console.error('Error sending data:', err);
            callback(err);
            return;
        } else {
            console.log('data send successfully');
            callback(null);
        }
    });
};

const selectById = (event_id, callback) => {
    const query = 'SELECT navn, dato, adresse FROM konference WHERE kon_id = ?';
    db.query(query, [event_id], (err, results) => {
        if (err) {
            console.error('Error selecting data:', err);
            callback(err, null);
        } else {
            console.log('Results from selectById:', results);
            console.log('Data selected successfully');
            callback(null, results);
        }
    });
};

const UpdateById = (event_id, updatedKonData, callback) => {
    const query = 'UPDATE konference SET ? WHERE kon_id = ?';
    db.query(query, [updatedKonData, event_id], (err, results) => {
        if (err) {
            console.error('Error updating events in the database:', err);
            return callback(err);
        } else {
            const updatedKonQuery = 'SELECT * FROM konference WHERE kon_id = ?';
            db.query(updatedKonQuery, [event_id], (err, updatedKon) => {
                if (err) {
                    console.error('Error fetching updated event:', err);
                    return callback(err);
                }

                callback(null, updatedKon[0]);
            });
        }
    });
};

module.exports = { insertEvent, getAllEventData, selectById, UpdateById };
