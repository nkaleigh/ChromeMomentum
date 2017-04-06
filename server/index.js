//needed moduels
const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      session = require('express-session'),
      app = module.exports = express(),
      port = 80;

const mainCtrl = require('./controllers/mainCtrl');

//creating setup for connection to a database
const connectionStrings = config.MASSIVE_URI;
var db = massive.connectSync({
    connectionString: connectionStrings
});
app.set('db', db);
var db = app.get('db');

//functions that run when handeling requets
app.use(bodyParser.json());
app.use(express.static(__dirname + '../dist'));
app.use(cors());
app.use(session({
    secret: config.SESSION_SECRET,
    saveUnitialized: false,
    resave: false
}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//get requests

//post requests

//put requests

//delete requets

//start the server listening on port
app.listen(port, function() {
    console.log('Ship docked at port ' + port);
});
