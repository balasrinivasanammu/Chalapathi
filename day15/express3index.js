var express = require('Express');
var app = express();

var things = require('./express3.js');

//both express3.js and express3index.js should be in same directory
app.use('/balaji', things);

app.listen(3000);

//express3index.js