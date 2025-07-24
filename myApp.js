let express = require('express');
let path = require('path');
let app = express();

app.get('/json', (req, res) => {
  res.json({ message: "Hello json" });
});

































 module.exports = app;
