var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log("Someone is going to the website")
});
console.log("Hey Im running but stuff doesnt work for some reason")
app.listen(3000 || process.env.port, function () {
  console.log('Example app listening on port 3000!');
});
