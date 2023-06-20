const express = require('express');
const bodyParser = require('body-parser');
const { Vonage } = require('@vonage/server-sdk');
const API_KEY="c41dcd3b"
const API_SECRET="Zj1kGsZKHzQn9mP1"

const vonage = new Vonage({
  apiKey: API_KEY,
  apiSecret: API_SECRET
});

const app = express();

// Template engine setup

// Public folder setup
app.use(express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Index route
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// Catch form submit
app.post('/', async (req, res) => {
  const from = '18334294612'
  const { to, name } = req.body;
  console.log(req.body);
  const text = `Hey ${name || 'user'}! It's your turn to come up to the upper library!`
  await vonage.sms.send({to, from, text})
    .then(resp => { console.log('Message sent successfully'); res.send(200); })
    .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
});

// Define port
const port = 3000;

// Start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));