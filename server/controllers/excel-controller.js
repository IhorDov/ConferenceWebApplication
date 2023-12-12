const { json } = require('body-parser');
const excelUploadModel = require('../models/excel-model');
const express = require('express');
const XLSX = require('xlsx');
const router = express.Router();
const upload = require('../config/multerConfig');

class ExelController {
    async passExcel(req, res) {
        //Excel doc is located within the buffer granted by the Multer middleware.
        const buffer = req.file.buffer;
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        //After the excel sheet has been parsed, it is passed along.
        excelUploadModel.excelToDatabase(jsonData, (err) => {
            if (err) {
                console.error('Error inserting event:', err);

                // Handle the error, e.g., send an error response to the client
                res.status(500).json({ error: 'Error creating event' });
            } else {
                console.log('event inserted successfully');

                // Handle success, e.g., send a success response to the client
                res.status(201).json({ message: 'event created successfully' });
            }
        });
    }

    async exelHandler(req, res) {
        // console.log('Reached controller');
        // console.log(req.file);
        const buffer = req.file.buffer;
        //const file = req.file.;
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        //const workbook = XLSX.read(file, {type: "binary"});
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        excelUploadModel.excelToDatabase(jsonData, req.body.konID, (err) => {
            if (err) {
                console.error('Error inserting event:', err);
                // Handle the error, e.g., send an error response to the client
                res.status(500).json({ error: 'Error creating event' });
            } else {
                console.log('event inserted successfully');
                // Handle success, e.g., send a success response to the client
                res.status(201).json({ message: 'event created successfully' });
            }
        });
    }
}

module.exports = new ExelController();
