var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');
var expect = chai.expect;
const app = require('../server/server.js');
const db = app.get('db');

chai.use(chaiHttp);

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

describe('Testing Profiles db:', function () {

  after(function() {
    db.dropTable('profiles');
  })

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
   it('expect server to return a single profile', function(done) {
      chai.request(server)
         .get('/api/profiles/' + roster[0].profileid)
         .end(function(err,res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
         })
   })
   it('expect profile to update', function(done) {
      chai.request(server)
         .put('/api/profiles/' + roster[0].profileid)
         .send(updateScout)
         .end(function(err,res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body.firstname).to.equal(updateScout.firstname);
            done();
         })
   })
   it('expect profile to be deleted', function(done) {
     chai.request(server)
      .get('/api/profiles')
      .end(function(err,res) {
        chai.request(server)
        .delete('/api/profiles/' + res.body[0].profileid)
        .end(function(err,res) {
           expect(res).to.have.status(200);
           expect(res).to.be.json;
           chai.request(server)
              .get('/api/profiles')
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
