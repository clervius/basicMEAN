var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose')

// Config
var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connect to database
mongoose.connect(db.url);

// To get all data of body POST parameters
    // parse app/json
app.use(bodyParser.json());
    // parse app/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
    // parse app/x-ww-fpr,-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// Override w/ the x-HTTP-Method-Override header in req. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// Set static files location
app.use(express.static(__dirname + '/public'));

// Routes ==========================================================================
require('./app/routes')(app);// Configure routes

// start app =======================================================================
    // Startup app at port 8080
app.listen(port);

//shoutout to user
console.log('Magic happens on port ' + port);

//expose app

exports = module.exports = app;
