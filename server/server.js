// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var cors = require('cors');
var path = require('path');

// INITILIZE APP
// ============================================================
var app = module.exports = express();

// CONFIG
// ============================================================
var config = require('./config');
var whitelist = ['http://localhost:80', 'http://localhost:8080', 'http://localhost:3000', 'http://159.203.255.40', 'http://troop51.com'];
var corsOptions = {
  origin: function (origin, callback) {
    console.log('*** corsOptions function ***');
    console.log('origin: ', origin);
    console.log('whitelist: ', whitelist);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


// INITILIZE DEPENDENCIES
// ============================================================
app.use(express.static(__dirname + './../dist'));
// app.use(function(req, res, next) {
//   console.log('*** use function: Access-Control-Allow-Origin ***');
//
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(cors());
// app.use(function(req, res, next) {
//   var allowedOrigins = ['http://localhost:80', 'http://localhost:8080', 'http://localhost:3000', 'http://159.203.255.40', 'http://troop51.com'];
//   var origin = req.headers.origin;
//   if(allowedOrigins.indexOf(origin) > -1){
//        res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', true);
//   console.log('Allowed origins: ', allowedOrigins);
//   return next();
// });
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

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, './../dist', 'index.html'))
})
// LISTEN
// ============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('Khayyam is amazing! Now listening on port ', port);
});
