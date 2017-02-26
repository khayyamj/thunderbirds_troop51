// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var cors = require('cors');
// CONFIG
// ============================================================
var config = require('./config');
var corsOptions = {
   origin: 'http://localhost:3000'
}
// INITILIZE APP
// ============================================================
var app = module.exports = express();
// INITILIZE DEPENDENCIES
// ============================================================
// app.use(express.static(__dirname + ''));
app.use(cors());
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

// PROFILES
app.get('/api/profiles', mainCtrl.fullRoster);
app.get('/api/profiles/:id', mainCtrl.oneProfile)
app.post('/api/profiles', mainCtrl.createProfile);
app.put('/api/profiles/:id', mainCtrl.updateProfile);
app.delete('/api/profiles/:id', mainCtrl.deleteProfile);

// ACTIVITIES
app.get('/api/activities', mainCtrl.allActivities);
app.get('/api/activities/:actid', mainCtrl.oneActivity)
app.post('/api/activities/:actid', mainCtrl.newActivity);
app.put('/api/activities/:actid', mainCtrl.updateActivity);
app.delete('/api/activities/:actid', mainCtrl.deleteActivity);

// TRANSACTIONS
app.get('/api/transactions', mainCtrl.allTransactions);
app.get('/api/transactions/:actid', mainCtrl.oneTransaction)
app.post('/api/transactions/:actid', mainCtrl.newTransaction);
app.put('/api/transactions/:actid', mainCtrl.updateTransaction);
app.delete('/api/transactions/:actid', mainCtrl.deleteTransaction);

// RANKS & ADVANCEMENTS

// LISTEN
// ============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('Khayyam is amazing! Now listening on port ', port);
});
