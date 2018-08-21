var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./function');
var message = "No Recommendation for app";

function input(key, id) {
  var options = {
    method: 'GET',
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + '/open/recommends/list/' + id,
    headers: {
      'API-KEY': key,
    }
  }
  return options;
}

describe("Dermalogica Open simple List ", function() {
  this.timeout(60000);
  it("BioLumin-C", function(done) {
    var count;
    var key = "f960530a-ba6f-463c-8f00-46e2071490f7";
    var id = 3;
    //console.log(subPath);
    var inputvalues = input(key, id);
    //console.log(inputvalues);
    request(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      //console.log(body);
      if (res.statusCode === 400) {
        expect(res.statusCode).to.equal(400);
        expect(body.error).to.equal(message);
      } else {
        var count = body.length;
        //console.log(body);
        fun.matrixcall(body, count);
      }
      done();
    })
  });
});
