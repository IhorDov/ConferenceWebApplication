const mysql = require('mysql2');
const db = require('../config/database');

// db.connect();

const insertEvent = (
    navn,
    tidspunkt,
    adresse,
    beskrivelse,
    kon_id,
    callback
) => {
    const query =
        'INSERT INTO aktivitet (navn, tidspunkt, adresse, beskrivelse, kon_id) VALUES (?, ?, ?, ?, ?)';
    db.query(
        query,
        [navn, tidspunkt, adresse, beskrivelse, kon_id],
        (err, results) => {
            if (err) {
                console.error('Error inserting activity:', err);
                callback(err);
                return;
            } else {
                const ak_id = results.insertId; // Get the auto-generated event_id
                console.log('Activity inserted successfully with ID:', ak_id);
                callback(null, ak_id);
            }
        }
    );
};

const selectById = (ak_id, callback) => {
    const query = 'SELECT * FROM aktivitet WHERE ak_id = ?';
    db.query(query, [ak_id], (err, results) => {
        if (err) {
            console.error('Error selecting data:', err);
            callback(err, null);
        } else {
            console.log('Results from selectById:', results);
            console.log('data slected successfully');
            callback(null, results);
        }
    });
};

const selectActByKonId = (kon_id, callback) => {
    const query = 'SELECT * FROM aktivitet WHERE kon_id = ?';
    console.log('I am in selectActByKonId model before the query');
    db.query(query, [kon_id], (err, results) => {
        if (err) {
            console.error('Error selecting data:', err.message);
            callback(err, null);
        } else {
            console.log('results from selectActByKonId model:', results);
            console.log('data slected successfully');
            callback(null, results);
        }
    });
};

const UpdateById = (ak_id, updatedAkData, callback) => {
    const query = 'UPDATE aktivitet SET ? WHERE ak_id = ?';
    db.query(query, [updatedAkData, ak_id], (err, results) => {
        if (err) {
            console.error('Error updating aktivitet in the database:', err);
            return callback(err);
        } else {
            const updatedAkQuery = 'SELECT * FROM aktivitet WHERE ak_id = ?';
            db.query(updatedAkQuery, [ak_id], (err, updatedAk) => {
                if (err) {
                    console.error('Error fetching updated aktivitet:', err);
                    return callback(err);
                }

                callback(null, updatedAk[0]);
            });
        }
    });
};

module.exports = { insertEvent, selectById, UpdateById, selectActByKonId };
