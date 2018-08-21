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
    url: env.hostname + env.APIver + '/open/recommends/matrix/' + id,
    headers: {
      'API-KEY': key,
    }
  }
  return options;
}

describe("Dermalogica Open matrix", function() {
  this.timeout(60000);
  it("Face Mapping Consumer", function(done) {
    var count;
    var key = "9881d86c-65f1-447d-aa7f-31bcb9381f65";
    var id = 9;
    //console.log(subPath);
    var inputvalues = input(key, id);
    //console.log(inputvalues);
    request(inputvalues, function(err, res, body) {
      //console.log(body);
      body = JSON.parse(body);
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
