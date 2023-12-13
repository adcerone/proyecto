const nodemailer = require('nodemailer');

function notifyOwner(message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'owner-email@example.com',
    subject: 'New Message from Your Shop',
    text: `Name: ${message.name}\nEmail: ${message.email}\nMessage: ${message.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = notifyOwner