require('dotenv').config();

const express = require('express');
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/basic');
const data = require('./models/dataModel');
const user = require('./models/userModel');
const nodemailer = require('nodemailer');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONFIG);
const db = mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => console.warn('Warning: ', error));
    
dataRoutes(app);

app.post('/api/form', (req,res) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
`;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'WillMurrayApps@gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: process.env.email, // generated ethereal user
      pass: process.env.password  // generated ethereal password
  },
  tls:{
    rejectUnauthorized:false
  }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Nodemailer Contact" <WillMurrayApps@gmail.com>', // sender address
    to: 'WillMurrayApps@gmail.com', // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello', // plain text body
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Email has been sent'});
});
});

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 10,
      currency: "cad",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

//connection.end();
module.exports = app;
