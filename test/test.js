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

// var cleanDatabase = function(done) {
//    ___.drop(function(e, r) {
//       done()
//    })
// }

describe('Test function working', function () {

   // before(cleanDatabase)
   // after(cleanDatabase)
   // beforeEach
   // afterEach

   it('expects true to equal true', function() {

      chai.expect(true).to.equal(!false);
      chai.expect(2+2).to.equal(4);
      chai.expect(2*2).to.equal(4);
   })

   it('expect profiles endpoint to return full roster', function(done) {
      chai.request(server)
         .get('/api/profiles')
         .end(function(err,res) {
            expect(res).to.be.ok;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            console.log(res.body);
            done();
         })
   })

   // it('expect profile to update', function(done) {
   //    chai.request(server)
   //       .get('/api/profiles/1')
   //       .end(function(err,res) {
   //          expect(res).to.have.status(500);
   //          expect(res).to.be.json;
   //          expect(res.body.firstname).to.equal(updateScout.firstname);
   //          console.log(res.body);
   //          done();
   //       })
   // })

   // it('expect post to create new profile', function(done) {
   //    chai.request(server)
   //       .post('/api/profiles')
   //       .end(function(err, res) {
   //          expect(res).to.have.status(200);
   //          expect(res).to.be.json;
   //          expect(res.body.firstname).to.equal(fakeScout.firstname);
   //
   //          done();
   //       })
   // })
})
