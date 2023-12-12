const db = require('../config/database');
const uploadExelModel = require('../models/excel-model');
const jwt = require('jsonwebtoken');
const sendMailUser = require('../service/send-mail-user');
const verifyToken = require('../middlewares/verifyToken');
const user = require('../models/users-model');

class UserController {
    async userRegistration(request, response, next) {
        try {
            let userEmailsNames = [];
            const kon_id = request.params.kon_id;
            console.log('kon_id from user-registration-controller', kon_id);
            const dynamicTable = uploadExelModel.tableprefix + kon_id;
            const values = [request.body.name, request.body.email];
            let konName = '';

            db.query(
                `SELECT Mail, Navn FROM ${dynamicTable}`,
                values,
                async (error, dataFromDb) => {
                    if (error) return response.status(500).json(error);
                    if (!dataFromDb.length)
                        return response
                            .status(409)
                            .json('User with this email does not exist!');

                    userEmailsNames = dataFromDb; //Here have we all emails from conference
                    // console.log(userEmailsNames);

                    db.query(
                        'SELECT navn From konference WHERE kon_id = ?',
                        [kon_id],
                        async (error, result) => {
                            if (error) return response.status(500).json(error);

                            // konName = result[0].navn;
                            // console.log(konName);
                        }
                    );

                    let mailSubject = 'Mail Invitation';

                    let content = `<p>Hii, You are invited to <a href='http://localhost:3000/users/login/${kon_id}'>${konName} Konference</a> by using your Mail.`;

                    if (userEmailsNames && mailSubject && content)
                        await sendMailUser(
                            userEmailsNames,
                            mailSubject,
                            content
                        );
                }
            );
        } catch (error) {
            next(error);
        }
    }

    async userLogin(request, response, next) {
        const email = String(request.body.email);
        const kon_id = request.body.kon_id;
        const dynamicTable = uploadExelModel.tableprefix + kon_id;
        console.log('kon_id from user-login-controller', kon_id);

        try {
            db.query(
                `SELECT * FROM ${dynamicTable} WHERE Mail =?`,
                [email],
                (error, dataFromDb) => {
                    if (error) return response.status(500).json(error);
                    if (dataFromDb.length === 0)
                        return response
                            .status(404)
                            .json(
                                'Email is empty or User with this email was not invited to conference. Contact administrator!'
                            );

                    console.log('User can logge in with email', email);
                    if (email === dataFromDb[0].Mail) {
                        console.log('User can logge in works!');

                        const token = jwt.sign(
                            { id: dataFromDb[0].parID },
                            process.env.JSON_WEB_TOKEN_KEY
                        );
                        const { email, ...other } = dataFromDb[0];

                        response
                            .cookie('access_token', token, {
                                httpOnly: true,
                            })
                            .status(200)
                            .json(other);
                    } else {
                        return response.status(400).json('Wrong user email!');
                    }
                }
            );
        } catch (error) {
            next(error);
        }
    }

    async userLogout(request, response, next) {
        response
            .clearCookie('access_token', {
                sameSite: 'none',
                secure: true,
            })
            .status(200)
            .json('User has been logged out.');
    }

    async userGetToken(req, res, next) {
        try {
            verifyToken;
            // verifyToken(req, res,() => {
            const userEmail = req.decoded;
            console.log(verifyToken);

            res.status(200).json({ userEmail });
            // });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
