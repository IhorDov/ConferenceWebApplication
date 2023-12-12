const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res
            .status(401)
            .json({ messege: 'Unauthorized: No token provided' });
    }

    const tokenString = token.split(' ')[1];

    console.log(typeof tokenString);
    console.log('Token to verify:', token);
    console.log('Tokenstring to verify:', tokenString);
    console.log(tokenString === token);
    // console.log('Secret:', process.env.JSON_WEB_TOKEN_KEY);

    jwt.verify(tokenString, process.env.JSON_WEB_TOKEN_KEY, (err, decoded) => {
        console.log('Verifying token...');
        if (err) {
            console.log('Error:', err.message); // Log the error message
            return res
                .status(403)
                .json({ message: 'Forbidden: Invalid token' });
        } else {
            console.log('Decoded token:', decoded);
            req.decoded = decoded;
            next();
        }
    });
};

module.exports = verifyToken;
