var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

describe("Dermalogica", function() {
  it("This should check for ALL Open App translations products in the US", function(done) {
    this.timeout(5000);
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/getTranslations/lang/en-US',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      expect(body).to.have.own.property('countryCode');
      expect(body.countryCode).to.be.equal('US');
      //console.log(body.countryCode);
      done();
      //setTimeout(done, 25000);
    })
  });
});
