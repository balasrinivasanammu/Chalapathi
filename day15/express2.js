/*
app.method(path, handler)
This METHOD can be applied to any one of the HTTP verbs – get, set, put, delete. An alternate method also exists, which executes independent of the request type.

Path is the route at which the request will run.
*/

var express = require('express');
var app = express();

app.get('/home', function(req, res){
   res.send("Welcome to home page!, made by zaheer and balaji");
});

app.post('/contact', function(req, res){
   res.send("You just called the post method at '/contact'!\n");
});

app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});

app.listen(3000);