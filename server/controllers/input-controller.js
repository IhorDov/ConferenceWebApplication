const db = require('../config/database');
const infomodel = require('../models/info-model');
const { fetchDataFromDatabase } = require('../models/info-model');

const TablesController = (req, res) => {
    const text = req.body.inputText;
    const kon_id = req.body.kon_id;
    const title = req.body.title;

    infomodel.TablesModel(text, kon_id, title, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error saving text' });
        } else {
            res.json(result);
        }
    });
};

const getData = (req, res) => {
    // console.log('fetch');
    const kon_id = req.params.kon_id;
    infomodel.fetchDataFromDatabase(kon_id, (err, data) => {
        if (err) {
            console.error('Error fetching data from the controller:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (data && data.length > 0) {
                console.log('Data selected successfully', data);
                res.json(data);
            } else {
                console.error('No data found', kon_id);
                res.status(404).json({ error: 'Data not found' });
            }
        }
    });
};

module.exports = { TablesController, getData };
