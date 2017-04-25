// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var cors = require('cors');
var path = require('path');
// CONFIG
// ============================================================
var config = require('./config');
var corsOptions = {
   origin: ['http://localhost:80','http://localhost:8080','http://localhost:3000']
}
// INITILIZE APP
// ============================================================
var app = module.exports = express();
// INITILIZE DEPENDENCIES
// ============================================================
app.use(express.static(__dirname + './../dist'));
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './../dist', 'index.html'))
})
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
app.get('/api/login', mainCtrl.getAllUsers)
app.post('/api/login', mainCtrl.registerUser);
app.put('/api/login/:loginid', mainCtrl.updateUser);

// PROFILES
app.get('/api/profiles', mainCtrl.fullRoster);
app.get('/api/profiles/:id', mainCtrl.oneProfile)
app.post('/api/profiles', mainCtrl.createProfile);
app.put('/api/profiles/:id', mainCtrl.updateProfile);
app.delete('/api/profiles/:id', mainCtrl.deleteProfile);

// ACTIVITIES
app.get('/api/activities', mainCtrl.allActivities);
app.get('/api/activities/attended', mainCtrl.allAttendedActivities);
app.get('/api/activities/participants', mainCtrl.allParticipants);
app.get('/api/activities/:actid', mainCtrl.oneActivity);
app.get('/api/activities/participants/:actid', mainCtrl.activityParticipants);
app.post('/api/activities', mainCtrl.createActivity);
app.post('/api/activities/:actid/:profileid', mainCtrl.linkParticipants);
app.put('/api/activities/:actid', mainCtrl.updateActivity);
app.delete('/api/activities/:actid', mainCtrl.deleteActivity);

// TRANSACTIONS
app.get('/api/transactions', mainCtrl.allTransactions);
app.get('/api/transactions/:profileid', mainCtrl.oneSetOfTransactions)
app.post('/api/transactions', mainCtrl.createTransaction);
app.put('/api/transactions/:actid', mainCtrl.updateTransaction);
app.delete('/api/transactions/:actid', mainCtrl.deleteTransaction);

// BLOG POSTS
app.get('/api/blog', mainCtrl.fetchPosts);
app.post('/api/blog', mainCtrl.createBlogPost);
app.post('/api/blog/tag',mainCtrl.createBlogPostTag);
app.get('/api/blog/tag',mainCtrl.getTags);
app.post('/api/blog/tagConnection', mainCtrl.tagConnection);
// RANKS & ADVANCEMENTS

// LISTEN
// ============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('Khayyam is amazing! Now listening on port ', port);
});
