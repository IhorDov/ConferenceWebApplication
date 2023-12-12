const akModel = require('../models/aktivitet-model');
const db = require('../config/database');

class AktivitetController {
    async createAktivitet(req, res) {
        // Extract user data from the request body or other sources
        const navn = req.body.navn;
        const tidspunkt = req.body.tidspunkt;
        const adresse = req.body.adresse;
        const beskrivelse = req.body.beskrivelse;
        const kon_id = req.body.kon_id;

        // Call the insertUser function to add the event to the database
        akModel.insertEvent(
            navn,
            tidspunkt,
            adresse,
            beskrivelse,
            kon_id,
            (err, ak_id) => {
                if (err) {
                    console.error('Error inserting activity:', err);
                    // Handle the error, e.g., send an error response to the client
                    res.status(500).json({ error: 'Error creating activity' });
                } else {
                    console.log(
                        'activity inserted successfully with ID:',
                        ak_id
                    );
                    res.status(201).json({
                        message: 'activity created successfully',
                        ak_id: ak_id,
                    });
                }
            }
        );
    }

    async getAllAktivityData(req, res) {
        const kon_id = req.query.kon_id;
        console.log('kon_id from getAllAktivityData controller', kon_id);
        const sql = 'SELECT * FROM aktivitet WHERE kon_id = ?';

        db.query(sql, [kon_id], (err, results) => {
            if (err) {
                console.error('Error fetching ativitet:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            console.log('results from getAllAktivityData controller', results);
            res.json(results);
        });
    }
    async getAllAktivityDataNew(req, res) {
        const kon_id = req.params.kon_id;
        const sql = 'SELECT * FROM aktivitet WHERE kon_id = ?';

        db.query(sql, [kon_id], (err, results) => {
            if (err) {
                console.error('Error fetching ativitet:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            console.log('results from getAllAktivityData controller', results);
            res.json(results);
        });
    }

    async getAkById(req, res) {
        // const kon_id = req.query.kon_id;  //When query - `...userGetActId?ak_id=${ak_id}`
        const ak_id = req.params.ak_id; // When params - `...events/${kon_id}`
        console.log('ak_id from getAkById controller', ak_id);
        akModel.selectById(ak_id, (err, results) => {
            if (err) {
                console.error('Error sending data:', err);
                res.status(500).json({ error: 'Error sending data 123' });
            } else {
                if (results && results.length > 0) {
                    // Check if results is defined and not empty
                    console.log('Data selected successfully');
                    // const akData = {
                    //     id: ak_id,
                    //     navn: results[0].navn,
                    //     tidspunkt: results[0].tidspunkt,
                    //     adresse: results[0].adresse,
                    //     beskrivelse: results[0].beskrivelse,
                    // };
                    res.json(results);
                } else {
                    console.error('No data found for the given ak_id:', ak_id);
                    res.status(404).json({ error: 'activity not found' });
                }
            }
        });
    }

    async putAktivitetById(req, res) {
        const ak_id = req.params.ak_id;
        const updatedAkData = req.body;

        akModel.UpdateById(ak_id, updatedAkData, (err, updatedAk) => {
            if (err) {
                console.error('Error updating aktivitet:', err);
                return res
                    .status(500)
                    .json({ error: 'Error updating aktivitet' });
            }
            res.json(updatedAk);
        });
    }
}

module.exports = new AktivitetController();
