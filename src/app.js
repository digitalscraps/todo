'use strict';

var express = require('express');
var router = require('./api');

var app = express();

app.use('/', express.static('public'));


app.use('/api', router);

//define server
app.listen(3000, function(){
    console.log("The server is runnig on port 3000");
});