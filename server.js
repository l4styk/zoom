var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var api = require('./config/api');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());


require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
