let express = require('express');
let path = require('path');
let app = express();

// Serve static files from the "public" directory
app.use('/public', express.static(__dirname + '/public'));

// Set the view engine to EJS
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



































 module.exports = app;
