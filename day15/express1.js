var express = require('express');
var app = express();

app.get('/nagalakshmi', function(req, res){
   res.send("Welcome to express js world tested by balaji");
});

app.listen(3000);












/*
app.get(route, callback)
res.send()-This function takes an object as input and it sends this to the requesting client. 
app.listen(port, [host], [backlog], [callback]])
*/
