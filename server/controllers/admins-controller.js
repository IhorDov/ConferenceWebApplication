const db = require('../config/database');
const adminModel = require('../models/admins-model');
const ApiError = require('../exceptions/api-error');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const randomstring = require('randomstring');
const sendMailAdmin = require('../service/send-mail-admin');

class AdminController {
    async adminRegistration(request, response, next) {
        try {
            //CHECK EXISTING ADMIN
            db.query(
                adminModel.adminSelectEmailPasswordModel,
                [request.body.name, request.body.email, request.body.password],
                (err, data) => {
                    if (err) return response.status(500).json(err);
                    if (data.length)
                        return response
                            .status(409)
                            .json('Admin already exists!');

                    //Hash the password and create a admin
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(request.body.password, salt);
                    const admin_key = request.body.admin_key;

                    const values = [
                        request.body.name,
                        request.body.email,
                        hash,
                    ];
                    const RealAdminKey = process.env.ADMIN_KEY;

                    if (RealAdminKey === admin_key) {
                        db.query(
                            adminModel.adminInsertModel,
                            [values],
                            (err, data) => {
                                if (err)
                                    return response
                                        .status(500)
                                        .json(err.message);

                                //
                                let mailSubject = 'Mail Verification';
                                const verificationToken =
                                    randomstring.generate();
                                let content =
                                    '<p>Hii ' +
                                    request.body.name +
                                    ', \
                    Please <a href="http://localhost:3000/admins/login?verificationToken=' +
                                    verificationToken +
                                    '"> Verify</a> your Mail.';
                                sendMailAdmin(
                                    request.body.email,
                                    mailSubject,
                                    content
                                );

                                db.query(
                                    adminModel.AdminUpdateVerifacationTokenModel,
                                    [
                                        verificationToken,
                                        request.body.email,
                                        (error) => {
                                            if (error) {
                                                return response
                                                    .status(400)
                                                    .send({
                                                        msg: error,
                                                    });
                                            }
                                        },
                                    ]
                                );
                                //

                                return response
                                    .status(200)
                                    .json('Admin has been created.');
                            }
                        );
                    }
                }
            );
        } catch (error) {
            next(error);
        }
    }

    async adminLogin(request, response, next) {
        try {
            //CHECK ADMIN

            db.query(
                adminModel.adminSelectEmailModel,
                [request.body.email],
                (err, data) => {
                    if (err) return response.status(500).json(err);
                    if (data.length === 0)
                        return response.status(404).json('Admin not found!');

                    const pasString = request.body.password.toString();

                    //Check password
                    const isPasswordCorrect = bcrypt.compareSync(
                        pasString,
                        data[0].password
                    );

                    console.log('Admin Password is correct!');

                    if (!isPasswordCorrect)
                        return response
                            .status(400)
                            .json('Wrong admin email or password!');

                    const token = jwt.sign(
                        { id: data[0].id },
                        process.env.JSON_WEB_TOKEN_KEY
                    );
                    const { password, ...other } = data[0];

                    response
                        .cookie('access_token', token, {
                            httpOnly: true,
                        })
                        .status(200)
                        .json(other);
                }
            );
        } catch (error) {
            next(error);
        }
    }

    async adminLogout(request, response, next) {
        response
            .clearCookie('access_token', {
                sameSite: 'none',
                secure: true,
            })
            .status(200)
            .json('Admin has been logged out.');
    }

    async adminReset(request, response) {
        db.query(
            adminModel.adminSelectEmailModel,
            [request.body.email],
            (err, data) => {
                if (err) return response.status(500).json(err);

                if (!data.length)
                    return response
                        .status(404)
                        .json('Admin with this email does not exist!');

                const adm_email = data[0].email;
                const verificationToken = data[0].verificationToken;

                console.log(
                    'Admin email from adminReset controller: ',
                    adm_email
                );
                let mailSubject = 'Reset Password';

                let content = `<p>Hii, Input a new password<a href='http://localhost:3000/admins/newpas/${adm_email}'> New Password</a> by using your Mail.`;

                sendMailAdmin(adm_email, mailSubject, content);

                return response.status(200).json(verificationToken);
            }
        );
    }

    async adminGetId(request, response) {
        const adm_email = request.params.adm_email;
        console.log('admin Get id controller');
        console.log(adm_email);
        db.query(
            'SELECT * FROM admin WHERE email =? ',
            // adminModel.adminSelectEmailModel,
            // adminModel.adminSelectJustEmailModel,
            adm_email,
            (err, data) => {
                if (err) return response.status(500).json(err.message);
                if (!data.length)
                    return response
                        .status(409)
                        .json('Admin with this email does not exist!');

                console.log('id finded by email', data[0].id);
            }
        );
    }

    async adminNewPassword(request, response) {
        const adm_email = request.params.adm_email;
        console.log(adm_email);
        db.query(adminModel.adminSelectEmailModel, [adm_email], (err, data) => {
            if (err) return response.status(500).json(err.message);
            if (!data.length)
                return response
                    .status(404)
                    .json('Admin with this email does not exist!');

            //Hash the password and create a admin
            const salt = bcrypt.genSaltSync(10);
            const admin_new_hash_password = bcrypt.hashSync(
                request.body.password,
                salt
            );
            const admin_key = request.body.admin_key;
            const admin_id = data[0].id;

            const values = [admin_new_hash_password, parseInt(admin_id)];
            const RealAdminKey = process.env.ADMIN_KEY;

            if (RealAdminKey === admin_key) {
                db.query(
                    adminModel.AdminUpdatePasswordModel,
                    values,
                    (err, data) => {
                        if (err) {
                            console.error('Error updating password:', err);
                            return response.status(500).json(err.message);
                        }

                        let mailSubject = 'Mail Confirmation';
                        let content =
                            '<p>Congratulation you have changed your Password.';
                        sendMailAdmin(adm_email, mailSubject, content);

                        response
                            .status(200)
                            .json('A new admin password was created!!!');
                    }
                );
            } else {
                response.status(500).json('Admin password was not created.');
            }
        });
    }

    async adminDelete(request, response) {
        const accessToken = response.cookie('access_token');

        if (accessToken) {
            try {
                db.query(
                    adminModel.adminSelectEmailModel,
                    [request.body.email],
                    (err, data) => {
                        if (err) return response.status(500).json(err);
                        if (data.length === 0)
                            return response
                                .status(404)
                                .json('Admin not found!');

                        const stringId = String(data[0].id);

                        if (stringId === request.params.adminId) {
                            db.query(adminModel.deleteSingleAdmin, data[0].id);

                            response
                                .status(200)
                                .json('Admin has been deleted.');
                        } else {
                            response
                                .status(403)
                                .json(
                                    'You are not allowed to delete this admin!'
                                );
                        }
                    }
                );
            } catch (error) {
                next(error);
            }
        }
    }
}

module.exports = new AdminController();
