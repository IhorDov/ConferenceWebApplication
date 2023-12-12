const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMailAdmin = async (email, mailSubject, content) => {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.ADMIN_EMAIL, //smtp_mail
                pass: process.env.ADMIN_EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.ADMIN_EMAIL,
            to: email,
            subject: mailSubject,
            html: content,
        };

        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Mail sent successfully:- ', info.response);
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = sendMailAdmin;