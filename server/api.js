// api.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { processPayment } = require('./payment');
const { insertPayment } = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/checkout', async (req, res) => {
  try {
    const { token, amount, email } = req.body;

    // Process the payment
    const charge = await processPayment(token, amount, email);
    console.log(charge);

    // Insert payment record into database
    await insertPayment(email, amount);

    res.json({ success: true, charge });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = app;
