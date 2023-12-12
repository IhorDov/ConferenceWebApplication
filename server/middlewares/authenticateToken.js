const jwt = require('jsonwebtoken');
require('dotenv').config();

const authToken = async (request, response, next) => {
    // Option 1
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1]; // Bearer Token

    // Option 2
    const token = request.header('x-auth-token');

    // If token not found, send error message
    if (!token) {
        response.status(401).json({
            errors: [
                {
                    msg: 'Token not found',
                },
            ],
        });
    }

    // Authenticate token
    try {
        const admin = await jwt.verify(token, process.env.JSON_WEB_TOKEN_KEY);
        request.admin = admin.email;
        next();
    } catch (error) {
        response.status(403).json({
            errors: [
                {
                    msg: 'Invalid token',
                },
            ],
        });
    }
};

module.exports = authToken;
