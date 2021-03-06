const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000
app.listen(PORT);
console.log('enye server is running on : 127.0.0.1: ' + PORT)