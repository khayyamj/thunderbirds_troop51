// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
// CONFIG
// ============================================================
var config = require('./config');
// INITILIZE APP
// ============================================================
var app = module.exports = express();
// INITILIZE DEPENDENCIES
// ============================================================
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// MASSIVE SETUP
// ============================================================
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
   connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');
// CONTROLLERS
// ============================================================
var mainCtrl = require('./mainCtrl');
// ENDPOINTS
// ============================================================
// TABLE ENDPOINTS
app.get('/api/profiles', mainCtrl.roster);
app.get('/api/profiles/:id', mainCtrl.oneProfile)
app.post('/api/profiles', mainCtrl.create);
app.put('/api/profiles/:id', mainCtrl.update);
app.delete('/api/profiles/:id', mainCtrl.delete);
// LISTEN
// ============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});
