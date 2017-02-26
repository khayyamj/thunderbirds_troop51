const app = require('./server.js');
const db = app.get('db');

db.init.create_profile_table([], function(err, results){
   if(err) {
      console.error(err);
   } else {
      // console.log('Initialized Profile Table');
   }
})
db.init.create_transactions_table([], function(err, results){
   if(err) {
      console.error(err);
   } else {
      // console.log('Initialized Accounts Table');
   }
})
db.init.create_activities_table([], function(err, results){
   if(err) {
      console.error(err);
   } else {
      // console.log('Initialized Activities Table');
   }
})
db.init.create_participants_table([], function(err, results){
   if(err) {
      console.error(err);
   } else {
      // console.log('Initialized Participants Table');
   }
})
db.init.create_ranks_table([], function(err, results){
   if(err) {
      console.error(err);
   } else {
      // console.log('Initialized Ranks Table');
   }
})

module.exports = {

  fullRoster: function(req, res, next) {
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
      db.get_oneprofile([id], function(err, table){
         console.log('Params: ', req.params.id);
         if (err) {
            console.error('oneProfile: ', err);
            return res.status(400).json(err);
         }
         return res.status(200).json(table[0]);
      });

   },

   createProfile: function(req, res, next) {
      const body = req.body;
      db.create_profile([body.firstname, body.lastname, body.nickname, body.email, body.address, body.city, body.state, body.zip, body.cellphone, body.homephone, body.birthday], function(err,table) {
         if (err) {
            console.error('create: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });

   },

   updateProfile: function(req, res, next) {
      const id = parseInt(req.params.id);
      const body = req.body;
      db.update_profile([id, body.firstname, body.lastname, body.nickname, body.email, body.address, body.city, body.state, body.zip, body.cellphone, body.homephone, body.birthday], function(err,table) {
         if (err) {
            console.error('update: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });
   },

   deleteProfile: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.delete_profile([id], function(err,table) {
         if (err) {
            console.log('delete: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });
   },

   allActivities: function(req, res, next) {
      db.get_transactions([], function(err,table) {
        if(err) {
          console.error('getActivites: ', err);
          return res.status(400).send(err);
        }
        return res.status(200).json(table);
      })
   },

   oneActivity: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.get_activity([id], function(err, table){
         console.log('Params: ', req.params.id);
         if (err) {
            console.error('oneActivity: ', err);
            return res.status(400).json(err);
         }
         return res.status(200).json(table[0]);
      });
   },

   newActivity: function (req, res, next) {
     const activity = req.body
     db.new_activity([activity.type,activity.date,activity.site,activity.lat,activity.lng,activity.notes], function(err, table) {
       if(err) {
         console.error('newActivity: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   updateActivity: function (req, res, next) {
     const id = parseInt(req.params.id),
           activity = req.body;
     db.update_activity([id,activity.type,activity.date,activity.site,activity.lat,activity.lng,activity.notes], function(err, table) {
       if(err) {
         console.error('updateActivity: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   deleteActivity: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.delete_activity([id], function(err,table) {
         if (err) {
            console.log('deleteActivity: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });
   },

   allTransactions: function(req, res, next) {
      db.get_transactions([], function(err,table) {
        if(err) {
          console.error('allTransactions: ', err);
          return res.status(400).send(err);
        }
        return res.status(200).json(table);
      })
   },

   oneTransaction: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.get_transaction([id], function(err, table){
         console.log('Params: ', req.params.id);
         if (err) {
            console.error('oneTransaction: ', err);
            return res.status(400).json(err);
         }
         return res.status(200).json(table[0]);
      });
   },

   newTransactions: function (req, res, next) {
     const transaction = req.body
     db.new_transactions([transaction.date,transaction.profileid,transaction.amount,transaction.activity,transaction.actid,transaction.notes], function(err, table) {
       if(err) {
         console.error('newTransactions: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   updateTransactions: function (req, res, next) {
     const id = parseInt(req.params.id),
           transaction = req.body;
     db.update_transaction([id,transaction.date,transaction.profileid,transaction.amount,transaction.activity,transaction.actid,transaction.notes], function(err, table) {
       if(err) {
         console.error('updateTransactions: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   deleteTransactions: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.delete_transaction([id], function(err,table) {
         if (err) {
            console.log('deleteTransactions: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });
   }


//  end of module.exports
}
