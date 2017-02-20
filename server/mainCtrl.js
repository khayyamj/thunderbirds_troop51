const app = require('./server.js');
const db = app.get('db');

db.init.create_profile_table([], function(err, results){
   if(err) {
      console.error(err);
   } else {
      console.log('Initialized Profile Table');
   }
})

module.exports = {

   roster: function(req, res, next) {
      db.get_roster([], function(err, table){
         if (err) {
            console.error('roster: ', err);
            return res.send(400).send(err);
         }
         return res.status(200).json(table)
      });
   },

   oneProfile: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.get_profile([id], function(err, table){
         console.log('Params: ', req.params.id);
         if (err) {
            console.error('oneProfile: ', err);
            return res.status(400).json(err);
         }
         return res.status(200).json(table[0]);
      });

   },

   create: function(req, res, next) {
      const body = req.body;
      db.createProfile([body.firstname, body.lastname, body.nickname, body.email, body.address, body.city, body.state, body.zip, body.cellphone, body.homephone, body.birthday], function(err,table) {
         if (err) {
            console.error('create: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });

   },

   update: function(req, res, next) {
      const id = parseInt(req.params.id);
      const body = req.body;
      db.updateProfile([id, body.firstname, body.lastname, body.nickname, body.email, body.address, body.city, body.state, body.zip, body.cellphone, body.homephone, body.birthday], function(err,table) {
         if (err) {
            console.error('update: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });
   },

   delete: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.deleteProfile([id], function(err,table) {
         if (err) {
            console.log('delete: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });
   }

}
