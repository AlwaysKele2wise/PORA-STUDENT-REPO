const nodemailer = require('nodemailer');
const otp = require('./otpGenerator')
const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler')


const mailer = asyncErrorHandler( async (user) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "alwayskele2wise@gmail.com",
            pass: "zfbprqgywealamsh"
        }
    });

    const mailOptions = {
        from: "alwayskele2wise@gmail.com",
        to: user.email,
        subject: 'Welcome to Opex',
        text: `Hi ${user.firstName} ${user.lastName}, \n\nWelcome to Opex, your OTP : ${otp}\n\nThank you`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

});

module.exports = mailer;