
var balaji = require('http');

balaji.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('I am Mohammad tested by balaji welcome hi dearjjkjh kjhkjh ssdsgsdf');
  res.end();
}).listen(8082);







/*
exports.myDateTime = function () {
  return Date();
};
*/