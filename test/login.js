var expect=require('chai').expect;
var https=require("https");
var request = require('request');
var env = require('./environment');

//var serv require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();


describe("login",function(done){
  it("login request",function(done){
    var token;
    var key="0000-00000-00000-0000";
    var formData={
    email:"mittapalli.rahul@gmail.com",
    password:"12345678"
  }
    var options = {
    "rejectUnauthorized": false,
    url: env.hostname+env.APIver+'/login',
    form:formData,
    headers: {
        'API-KEY':key,
      'Content-Type':"application/x-www-form-urlencoded"
    }
      };
      //console.log(options);
  // request.post({url:env.hostname+env.APIver+'/therapist/add',},
  request.post(options,function (err, res, body){
    //console.log(err);
    body=JSON.parse(body);
    //console.log(body);
    token=body.accessToken;
    expect(res.statusCode).to.equal(200);
    expect(body).to.have.own.property('authsuccess');
    expect(body.authsuccess).to.be.true;
    expect(body).to.have.own.property('accessToken');
    expect(body.accessToken).to.be.a('string'); // Recommended
    done();
})
});
});
