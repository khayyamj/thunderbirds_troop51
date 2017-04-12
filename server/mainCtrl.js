const app = require('./server.js');
const db = app.get('db');

db.init.create_login_registration_table([], function(err, results) {
  if(err) {
    console.error(err);
  } else {
    // console.log('Initialized Login Registration Table');
  }
})
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
db.init.create_blog([], function(err, results) {
  if (err) {
    console.error(err);
  } else {
    // console.log('Initialized Blog Table');
  }
})
db.init.create_blogtag_connection([], function(err, results) {
  if (err) {
    console.error(err);
  } else {
    // console.log('Initialized Blog Tag Connection Table');
  }
})
db.init.create_blogtags([], function(err, results) {
  if (err) {
    console.error(err);
  } else {
    // console.log('Initialized Blog Tag Table')
  }
})

module.exports = {

  getAllUsers: function(req, res, next) {
    db.get_users([], function(err, table) {
      if(err) {
        console.error('getAllUsers: ', err);
        return res.status(400).send(err);
      }
      return res.status(200).json(table);
    })
  },

  registerUser: function(req, res, next) {
    const b = req.body;
    console.log('registerUser--> body: ', b);
    db.create_login_registration([b.age, b.clientid, b.date, b.lastname, b.firstname, b.picture_sm, b.picture_lg, b.email, b.lastlogin], function(err, table) {
      if (err) {
        console.log('registerUser: ', err);
        return res.status(400).send(err);
      }
      return res.status(200).json(table);
    })
  },

  updateUser: function(req, res, next) {
    const loginid = req.params.loginid,
          b = req.body;
    db.update_login_registration([loginid, b.age, b.clientid, b.date, b.lastname, b.firstname, b.picture_sm, b.picture_lg, b.email, b.lastLogin], function(err, table) {
      if (err) {
        console.log('registerUser: ', err);
        return res.status(400).send(err);
      }
      return res.status(200).json(table);
    })
  },

  fullRoster: function(req, res, next) {
    db.get_roster([], function(err, table){
       if (err) {
          console.error('roster: ', err);
          return res.status(400).send(err);
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
      db.create_profile([body.firstname, body.lastname, body.nickname, body.email, body.address, body.city, body.state, body.zip, body.cellphone, body.homephone, body.birthday, body.imageUrl, body.position, body.permissions, body.handbook, body.orangeneckerchief, body.thunderbirdneckerchief, body.active, body.adult], function(err,table) {
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
      console.log('mainCtrl updateProfile: ', body);
      db.update_profile([id, body.firstname, body.lastname, body.nickname, body.email, body.address, body.city, body.state, body.zip, body.cellphone, body.homephone, body.birthday, body.imageUrl, body.position, body.permissions, body.handbook, body.orangeneckerchief, body.thunderbirdneckerchief, body.active, body.adult], function(err,table) {
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
      db.get_activities([], function(err,table) {
        if(err) {
          console.error('getActivites: ', err);
          return res.status(400).send(err);
        }
        return res.status(200).json(table);
      })
   },

   allAttendedActivities: function(req, res, next) {
     db.get_all_attended_activities([], function(err, table) {
       if(err) {
         console.error('allAttendedActivities: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table);
     })
   },

   allParticipants: function(req, res, next) {
     console.log('allParticipants function called');
     db.get_all_participants([], function(err, table) {
       if(err) {
         console.error('allParticipants: ', err);
         return res.status(400).send(err);
       }
       return res. status(200).json(table);
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

   activityParticipants: function(req, res, next) {
     const actid = parseInt(req.params.actid);
     db.get_activity_participants([actid], function(err, table) {
       if (err) {
         console.error('activityParticipants: ', err);
         return res.status(400).json(err);
       }
       return res.status(200).json(table);
     })
   },

   createActivity: function (req, res, next) {
     const activity = req.body
     db.create_activity([activity.type,activity.date,activity.site,activity.lat,activity.lng,activity.notes], function(err, table) {
       if(err) {
         console.error('newActivity: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   linkParticipants: function(req, res, next) {
     const actid = req.params.actid,
            profileid = req.params.profileid;
            console.log('mainCtrl-->',actid, profileid)
     db.create_link_participants_activity([actid, profileid], function(err, table) {
       if (err) {
         console.error('linkParticipants: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table);
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

   oneSetOfTransactions: function(req, res, next) {
      const id=parseInt(req.params.profileid);
      db.get_transactionSet([id], function(err, table){
         console.log('Params: ', req.params.id);
         if (err) {
            console.error('oneSetOfTransactions: ', err);
            return res.status(400).json(err);
         }
         return res.status(200).json(table);
      });
   },

   createTransaction: function (req, res, next) {
     const transaction = req.body
     db.create_transaction([transaction.date,transaction.profileid,transaction.amount,transaction.accounting,transaction.activity,transaction.actid,transaction.notes], function(err, table) {
       if(err) {
         console.error('createTransaction: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   updateTransaction: function (req, res, next) {
     const id = parseInt(req.params.id),
           transaction = req.body;
     db.update_transaction([id,transaction.date,transaction.profileid,transaction.amount,transaction.activity,transaction.actid,transaction.notes], function(err, table) {
       if(err) {
         console.error('updateTransaction: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   deleteTransaction: function(req, res, next) {
      const id=parseInt(req.params.id);
      db.delete_transaction([id], function(err,table) {
         if (err) {
            console.log('deleteTransaction: ', err);
            return res.status(400).send(err);
         }
         return res.status(200).json(table[0]);
      });
   },

   createBlogPost: function(req, res, next) {
     const b = req.body;
     db.create_blogpost([b.title, b.content, b.authorid, b.date_saved, b.date_published], function(err, table) {
       if(err) {
         console.error('createBlogPost: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table[0]);
     })
   },

   createBlogPostTag: function(req, res, next) {
     db.create_blogpost_tag([req.body.title], function(err, table) {
       if(err) {
         console.error('createBlogPostTag: ', err);
         return res.status(400).send(err);
       }
       console.log('Create Tag response: ', table[0])
       return res.status(200).json(table[0]);
     })
   },

   tagConnection: function (req, res, next) {
     const b = req.body;
     db.create_blog_tag_connection([b.tagid, b.blogid], function(err, table) {
       if(err) {
         console.error('tagConnection: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table);
     })
   },

   getTags: function(req, res, next) {
     db.get_tags([], function(err, table) {
       if(err) {
         console.error('getTags: ', err);
         return res.status(400).send(err);
       }
       return res.status(200).json(table);
     })
   },

  fetchPosts: function(req, res, next) {
    db.get_posts([], function(err, table) {
      if (err) {
        console.error('fetchPosts: ', err);
        return res.status(400).send(err);
      }
      return res.status(200).json(table);
    })
  }

//  end of module.exports
}
