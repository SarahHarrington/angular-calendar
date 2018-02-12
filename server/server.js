var express = require('express');
var path = require('path'); //Node.js - path module provides utitilies for working with file and directory paths
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/views/index.html'))
})

app.listen(port, function(){
    console.log('Listening on port:', port);
})