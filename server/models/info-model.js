const express = require('express');
const db = require('../config/database');
const { callbackPromise } = require('nodemailer/lib/shared');

// db.connect()

const TablesModel = (text, kon_id, title, callback) => {
    const query = 'INSERT INTO texts (text, kon_id, title) VALUES (?,?,?)';

    db.query(query, [text, kon_id, title], (err) => {
        if (err) {
            console.error('Error saving text:', err);
            callback(err, null);
        } else {
            callback(null, { success: true });
        }
    });
};

const fetchDataFromDatabase = (kon_id, callback) => {
    const query = 'SELECT * FROM Texts WHERE kon_id = ?';

    db.query(query, [kon_id], (err, result) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            callback(err, null);
        } else {
            console.log(result);
            callback(null, result);
        }
    });
};

module.exports = { TablesModel, fetchDataFromDatabase };
