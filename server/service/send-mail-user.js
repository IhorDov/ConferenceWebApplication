const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMailUser = async (recipients, mailSubject, content) => {
    try {
        const transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.ADMIN_EMAIL, //smtp_mail
                pass: process.env.ADMIN_EMAIL_PASSWORD,
            },
        });

        //
        await recipients.forEach((recipient) => {
            const mailOptions = {
                from: process.env.ADMIN_EMAIL,
                to: recipient.Mail,
                subject: mailSubject,
                html: content,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(
                        `Error sending email to ${recipient.Mail}: ${error.message}`
                    );
                } else {
                    console.log(
                        `Email sent to ${recipient.Mail}: ${info.response}`
                    );
                }
            });
        });
    } catch (error) {
        console.log(error.message);
    }
};
// const sendMailUser = async (email, mailSubject, content) => {
//     const recipients = [];

//     try {
//         const transport = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 587,
//             secure: false,
//             requireTLS: true,
//             auth: {
//                 user: process.env.ADMIN_EMAIL, //smtp_mail
//                 pass: process.env.ADMIN_EMAIL_PASSWORD,
//             },
//         });

//         //
//         // recipients.forEach((recipient) => {
//         //     const mailOptions = {
//         //         from: process.env.ADMIN_EMAIL,
//         //         to: recipient.Mail,
//         //         subject: mailSubject,
//         //         html: content,
//         //     };
//         // });
//         //
//         const mailOptions = {
//             from: process.env.ADMIN_EMAIL,
//             to: email,
//             subject: mailSubject,
//             html: content,
//         };

//         transport.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('Mail sent successfully:- ', info.response);
//             }
//         });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

module.exports = sendMailUser;
