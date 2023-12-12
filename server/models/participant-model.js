const db = require('../config/database');

const tableprefix = 'parDynamic';

const getParticipants = (kon_id, callback) => {
    console.log('Reached getParticipants model!');
    const dynamicTable = tableprefix + kon_id;

    db.query(
        `SHOW COLUMNS FROM ${db.config.database}.${dynamicTable}`,
        (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }

            //Array containing the column names.
            const dbColNames = results.map((row) => row.Field);

            let data;
            db.query(
                `SELECT ${dbColNames[1]}, ${dbColNames[2]},${dbColNames[3]} FROM ${db.config.database}.${dynamicTable}`,
                (error, results) => {
                    if (error) {
                        callback(err, null);
                        throw error;
                    }
                    data = results;
                    callback(null, data);
                }
            );
        }
    );
};

const getParticipantsFull = (kon_id, callback) => {
    const dynamicTable = tableprefix + kon_id;

    let data;
    db.query(
        `SELECT * FROM ${db.config.database}.${dynamicTable}`,
        (error, results) => {
            if (error) {
                callback(err, null);
                throw error;
            }
            data = results;
        }
    );
    callback(null, data);
};

module.exports = { getParticipants, getParticipantsFull };
