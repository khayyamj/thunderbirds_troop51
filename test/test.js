var chai = require('chai');
var chaiHttp = require ('chai-http');
var server = require('./../server/server');
var should = chai.should();

chai.use(chaiHttp);

describe('Profiles', function() {
   it('should list All profiles on /api/profiles GET', function() {
      chai.request(server)
         .get('/api/profiles')
         .end(function(err, res) {
            res.should.have.status(404);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.SUCCESS.should.contain.elements(9);
            done();
         });
   });
   it('should list a SINGLE profile on /api/profiles/:id GET', function() {
      chai.request(server)
         .get('/api/profiles')
         .end(function(err,res) {
            console.log('Get profile url:  /api/profiles/' + res.body[0].profileid);
            chai.request(server)
               .get('/api/profiles/' + res.body[0].profileid)
               .end(function(error,response) {
                  console.log('GET Single profile test: ',response);
                  response.should.have.status(200);
                  response.should.be.json;
                  response.body.should.be.a('object');
                  response.body.should.have.property('firstname');
                  response.body.UPDATED.firstname.should.equal('Mathew');
                  response.body.should.have.property('email');
                  response.body.UPDATED.email.should.equal('mattyspindle@someone.net');
                  repsonse.body.should.have.property('cellphone');
                  response.body.UPDATED.cellphone.should.equal('801-393-8868');
                  done();
               })
         })
   });
   it('should add a SINGLE profile on /api/profiles POST', function() {
      chai.request(server)
         .post('/api/profiles')
         .send({
         	"firstname": "William",
         	"lastname": "Spandorinski",
         	"nickname": "Will",
         	"email": "willthepill@help.me",
         	"address": "243 Anywhere Ct.",
         	"city": "Spanish Fork",
         	"state": "UT",
         	"zip": 84633,
         	"cellphone": "435-879-7368",
         	"homephone": "435-564-5645",
         	"birthday": "2004/02/10"
         })
         .end(function(err, res) {
            console.log('Profiles POST test: ',res.body);
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.SUCCESS.have.property('profileid');
            res.body.SUCCESS.have.property('firstname');
            res.body.SUCCESS.firstname.should.equal('William');
            res.body.SUCCESS.have.property('lastname');
            res.body.SUCCESS.lastname.should.equal('Hansen');
            res.body.SUCCESS.have.property('cellphone');
            res.body.SUCCESS.cellphone.should.be.a('string');
            done();
         });
   });
   // it('should update a SINGLE profile on /api/profiles/:id PUT', function() {
   //    chai.request(server)
   //       .get('/api/profiles')
   //       .end(function(err,res) {
   //          chai.request(server)
   //             .put('/api/profiles/res.body[0].profileid')
   //             .send({
   //             	"firstname": "Test",
   //             	"email": "tester@devmtn.net",
   //             	"cellphone": "801-123-4567"
   //             })
   //             .end(function(error,response) {
   //                console.log('PUT test: ',response.data);
   //                response.should.have.status(200);
   //                response.should.be.json;
   //                response.body.should.be.a('object');
   //                response.body.should.have.property('firstname');
   //                response.body.UPDATED.firstname.should.equal('Test');
   //                response.body.should.have.property('email');
   //                response.body.UPDATED.email.should.equal('tester@devmtn.net');
   //                repsonse.body.should.have.property('cellphone');
   //                response.body.UPDATED.cellphone.should.equal('801-123-4567');
   //                done();
   //             })
   //       })
   // });
   // it('should delete a SINGLE profile on /api/profiles/:id DELETE', function() {
   //    chai.request(server)
   //       .get('/api/profiles')
   //       .end(function(err,res) {
   //          console.log('Delete test GET: ',res);
   //          chai.request(server)
   //          .delete('/api/profiles/'+res.body[0].profileid)
   //          .end(function(error, response) {
   //             console.log('Delete test: ',response);
   //             response.should.have.status(200);
   //             response.should.be.json;
   //             response.body.should.be.a('object');
   //             done();
   //          })
   //       })
   // });
});
