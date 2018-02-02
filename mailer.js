var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
}));

var mailOptions = {
  from: 'fromid@gmail.com',
  to: 'to@gmail.com',
  subject: 'Test email bia node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});