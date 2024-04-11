const fs = require('fs');
const nodemailer = require('nodemailer');
const recipients = require('./recipients.json');

async function sendEmails() {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'chaitanyajambhulkar768@gmail.com', 
            pass: 'oqgabaveuzjuvioc' 
        }
    });

    for (const recipient of recipients) {
        const { username, recipient_email } = recipient;

        const mailOptions = {
            from: 'Chaitanya Jambhulkar <chaitanyajambhulkar768@gmail.com>',
            to: recipient_email,
            subject: 'Hello!',
            html: `<p>Dear ${username},</p><p>Hello!</p> I'm Chaitanya`
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${username} at ${recipient_email}`);
        } catch (error) {
            console.error(`Error sending email to ${username} at ${recipient_email}: ${error}`);
        }
    }
}

sendEmails();
