require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
('use strict');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./routers/index');
const errorMiddleware = require('./middlewares/error-middleware');
const jwt = require('jsonwebtoken');
const con = require('./config/database');

('use strict');

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(router);
app.use(errorMiddleware);

const start = async () => {
    try {
        con.connect();
        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

start();
