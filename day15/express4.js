
var express = require('express');
var app = express();

app.get('/:name', function(req, res){
   res.send('The id you specified is ' + req.params.name);
});
app.listen(4000);

/*
var express = require('express');
var app = express();

app.get('/google/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.listen(3000);

//http://localhost:3000/google/balaji/22

*/
/*
var express = require('express');
var app = express();

app.get('/google/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.listen(3000);

//http://localhost:3000/google/22222

*/