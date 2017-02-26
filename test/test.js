// change database to 'test' in config file before testing!
// change database to 'thunderbirds' when testing is complete.

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');
var expect = chai.expect;
const db = server.get('db');

chai.use(chaiHttp);
describe('<<********************** Unit Testing Begins **********************>>', function() {
  // after(function() {
  //   db.dropTable('profiles');
  //   db.dropTable('activities');
  //   db.dropTable('accounts');
  //   db.dropTable('participants');
  //   db.dropTable('ranks');
  // })


  describe('<====================== Testing Profiles db ======================>', function () {

  var fakeScout =  {
      firstname: 'Maximillian',
      lastname: 'Tester',
      nickname: 'Max',
      email: 'testerMax@max.pizza',
      address: '3 Testing Cove',
      city: 'Test',
      state: 'UT',
      zip: '84000',
      cellphone: '435-000-0000',
      homephone: '801-000-0000',
      birthday: '2001-11-11',
      imageurl: null
     }
  var updateScout = {
     firstname: 'Jenkins',
     email: 'testerJ@superhim.com',
     homephone: '435-999-9999'
  }
  var roster = [];
  var profileUrl = '/api/profiles/';

    describe('Creating profile Test', function() {


      it('expect post to create new profile', function(done) {
       chai.request(server)
          .post('/api/profiles')
          .send(fakeScout)
          .end(function(err, res) {
             expect(res).to.have.status(200);
             expect(res).to.be.json;
             expect(res.body.firstname).to.equal(fakeScout.firstname);
             done();
          })
      })
    })

    describe('GET (full roster) Test', function() {
     it('expect profiles endpoint to return full roster', function(done) {
        chai.request(server)
           .get('/api/profiles')
           .end(function(err,res) {
             roster = res.body;
              expect(res).to.be.ok;
              expect(res).to.have.status(200);
              expect(res).to.be.json;
              done();
           })
      })
   })

    describe('Checking on GET (SINGLE PROFILE)', function() {
      it('expect server to return a single profile', function(done) {
        chai.request(server)
          .get(profileUrl)
          .end(function(err,res) {
            chai.request(server)
            .get(profileUrl + res.body[0].profileid)
            .end(function(err,res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            })
          })
      })
    })

    describe('PUT (updating profile) Test', function() {
     it('expect profile to update', function(done) {
        chai.request(server)
          .get(profileUrl)
          .end(function(err, res) {
            var i = res.body.length;
            chai.request(server)
              .put('/api/profiles/' + res.body[i-1].profileid)
              .send(updateScout)
              .end(function(err,res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.firstname).to.equal(updateScout.firstname);
                done();
             })
         })
     })
  })

    describe('DELETE (removing profile) Test>', function() {
      it('expect profile to be deleted', function(done) {
         chai.request(server)
          .get(profileUrl)
          .end(function(err,res) {
            var tempId = res.body[0].profileid;
            chai.request(server)
            .delete(profileUrl + res.body[0].profileid)
            .end(function(err,res) {
               expect(res).to.have.status(200);
               expect(res).to.be.json;
               chai.request(server)
                  .get(profileUrl)
                  .end(function(err,res) {
                     expect(res).to.have.status(200);
                     expect(res.body).to.be.a('array');
                     expect(res.body).to.have.length(roster.length - 1);
                     done();
                  })
            })
          })
    })
  })

  // <============ end Profile endpoints testing ================>
  });

  describe('<====================== Activity Endpoints ======================>', function() {
    //  test data
    //  =======================================================
      var fakeActivity = {
        type: 'test activity',
        date: '2017/01/17',
        site: 'Testing Testing',
        lat: 39.8898,
        lng: -111.8867,
        notes: 'Testing notes with a fake activity'
      }
      var aid = '';
      var activityUrl = '/api/activities/'


    describe('POST (adding activity) Test', function () {
        it('Made a successful post submission', function(done) {
          chai.request(server)
            .post(activityUrl)
            .send(fakeActivity)
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res).to.be.json;
              expect(res.body.actid).to.exist;
              expect(res.body.actid).to.be.a('number');
              done();
            })
        })
        it('Correct information was submitted', function(done) {
          chai.request(server)
            .post(activityUrl)
            .send(fakeActivity)
            .end(function(err, res) {
              expect(res.body.type).to.be.equal(fakeActivity.type);
              expect(res.body.notes).to.be.equal(fakeActivity.notes);
              expect(res.body.date).to.be.a('string');

              done();
            })
        })
      });

    describe('GET Activities (all activities) test', function () {
      it('GET Endpoint exists and returns valid', function() {
        chai.request(server)
          .get(activityUrl)
          .end(function(err, res) {
            expect(res).to.have.status(200);
            done();
          })
      })
      it('Endpoint returns correct information', function() {
        chai.request(server)
          .get(activityUrl)
          .end(function(err, res) {
            expect(res).to.be.json;
            expect(res.body).to.exist;
            expect(res.body.type).to.equal(fakeActivity.type);
            done();
          })
      })
    });

    describe('PUT Activities (updating activities) test', function () {
      const fakeActivityUpdate = {
        type: 'update test',
        date: '1999/13/29',
        site: 'DevMtn Test Silo',
        lat: 40.0000,
        lng: -112.0000,
        notes: 'Getting the hand of testing with Mocha and Chai'
      },
            actid = '',
            body = {};

      it('PUT Endpoint exists and returns valid', function() {
        chai.request(server)
          .put(activityUrl)
          .end(function(err, res) {
            body = res.body;
            expect(res).to.have.status(200);
            done();
          })
      })

    });

    describe('DELETE Activities (remove activities) test', function () {
      it('Remove an activity from the database')
    })


  // <============ end Activity endpoints testing ================>
  });

  describe('<<********************** Accounts Testing Begins **********************>>', function() {
    it('Accounts should have GET, POST, PUT and DELETE endpoints')
    describe('POST tests', function() {
      it('POST endpoint should return information')
      it('POST should create a new transaction entry')
      it('POST should add correct information')
    })
    describe('GET tests', function() {
      it('GET endpoint should exist and return information')
      it('GET should return a .json object')
      it('GET should return transaction objects')
      it('GET :/{transactionid} should return a single entry')
    })
    describe('PUT tests', function() {
      it('PUT endpoint should exist and return information')
      it('PUT should return a .json object')
      it('PUT should modify the transaction entry correctly')
    })
    describe('DELETE tests', function() {
      it('DELETE endpoint should exist and return information')
      it('DELETE should return a .json object')
      it('DELETE should remove a transaction entry')
    })
  })
  // <================== Accounting Testing Ends ====================>

  describe('<<********************** RANKS Testing Begins **********************>>', function() {
    it('RANKS should have GET, POST, PUT and DELETE endpoints')
    describe('POST tests', function() {
      it('POST endpoint should return information')
      it('POST should create a new entry')
      it('POST should add correct information')
    })
    describe('GET tests', function() {
      it('GET endpoint should exist and return information')
      it('GET should return a .json object')
      it('GET should return ranks objects')
      it('GET :/{rankid} should return a single entry')
    })
    describe('PUT tests', function() {
      it('PUT endpoint should exist and return information')
      it('PUT should return a .json object')
      it('PUT should modify the transaction entry correctly')
    })
    describe('DELETE tests', function() {
      it('DELETE endpoint should exist and return information')
      it('DELETE should return a .json object')
      it('DELETE should remove a rank entry')
    })
  })
  // <================== Accounting Testing Ends ====================>

  // <====================== Unit Testing Ends ======================>
})
