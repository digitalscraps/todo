'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

//First API ROUTE

//create router
var router = express.Router();
router.get('/todos', function(req,res){
//callback response with json method
    res.json({todos:[]});
});
//TODO: Add Post route  to create new entries
//TODO: Add PUT route to update existing entries
//TODO: Add Delete route to delete entries 
app.use('/api', router);

//define server
app.listen(3000, function(){
    console.log("The server is runnig on port 3000");
});