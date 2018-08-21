var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun =require('./function');

function input(key, productid,langCode) {
  var options = {
    method:'GET',
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + '/open/products/' + productid +langCode,
    headers: {
      'API-KEY': key,
    }
  }
  return options;
}
describe("Dermalogica", function() {
  this.timeout(5000);
  it("This should check for open API products with landCode and Country name ", function(done) {
    this.timeout(5000);
    var key = "0000-00000-00000-0000";
    var productid=223;
    var langCode = "en-US";
    var inputvalues = input(key, productid,langCode);
    request(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      fun.plandc(body);
      done();
    })
  });
});
