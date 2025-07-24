require('dotenv').config()
let express = require('express');
let path = require('path');
let app = express();

app.get('/json', (req, res) => {
  const message = process.env.MESSAGE_STYLE === 'uppercase'
    ? "HELLO JSON"
    : "Hello json";

  res.json({ message });
});
































 module.exports = app;
