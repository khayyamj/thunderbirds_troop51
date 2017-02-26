// change database to 'test' in config file before testing!
// change database to 'thunderbirds' when testing is complete.

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');
var expect = chai.expect;
const db = server.get('db');

chai.use(chaiHttp);
describe('<<********************** Unit Testing Begins **********************>>', function() {



  describe('<====================== Testing Profiles db ======================>', function () {
    //  Testing Profile endpoints
    // ==========================================================
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



    // after(function() {
    //   db.dropTable('profiles');
    //   db.dropTable('activities');
    //   db.dropTable('accounts');
    //   db.dropTable('participants');
    //   db.dropTable('ranks');
    // })

    describe('Creating profile Test ----------------->', function() {


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

    describe('GET (full roster) Test ----------------->', function() {
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

    describe('Checking on GET (SINGLE PROFILE) ----------------->', function() {
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

    describe('PUT (updating profile) Test ----------------->', function() {
     it('expect profile to update', function(done) {
        chai.request(server)
          .get(profileUrl)
          .end(function(err, res) {
            chai.request(server)
              .put('/api/profiles/' + res.body[0].profileid)
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

    describe('DELETE (removing profile) Test ----------------->', function() {
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


  // describe('<====================== Activity Endpoints ======================>', function() {
  //   //  test data
  //   //  =======================================================
  //     var fakeActivity = {
  //       type: 'test activity',
  //       date: '2017/01/17',
  //       site: 'Testing Testing',
  //       lat: 39.8898,
  //       lng: -111.8867,
  //       notes: 'Testing notes with a fake activity'
  //     }
  //     var aid = '';
  //
  //
  //     describe('Adding activity to database', function () {
  //       chai.request(server)
  //         .post('/api/activities')
  //         .send(fakeActivity)
  //         .end(function(err, res) {
  //           expect(res).to.have.status(200);
  //           expect(res).to.be.json;
  //           console.log('...................res.body.aid...............' + res.body.aid);
  //           expect(res.body.aid).to.exist;
  //           expect(res.body.aid).to.be.a('number');
  //           aid = res.body.aid;
  //           done();
  //         })
  //     });

  //   describe('Verifying activity entered into database', function () {
  //     chai.request(server)
  //       .get('/api/activities')
  //       .end(function (err, res) {
  //         expect(res).to.have.status(200);
  //         expect(res).to.be.json;
  //
  //
  //         done();
  //       })
  //   })
  //
  //
  //
  //
  //
  // });
  // <============ end Activity endpoints testing ================>
  // });

  // <====================== Unit Testing Ends ======================>
})
