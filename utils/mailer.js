const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/userModels');

const mailer = async (user) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "alwayskele2wise@gmail.com",
                pass: "zfbprqgywealamsh"
            }
        });

        const mailOptions = {
            from: "alwayskele2wise@gmail.com",
            to: email,
            subject: 'Welcome to Opex',
            text: `Hi ${user.firstName} ${user.lastName}, \n\n Welcome to Opex`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (err) {
        console.error('Error sending email: ', err);
    }
};

module.exports = mailer;