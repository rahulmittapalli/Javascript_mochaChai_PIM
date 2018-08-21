var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./function');

function input(key, productid) {
  var options = {
    method: 'GET',
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + '/open/products/' + productid,
    headers: {
      'API-KEY': key,
    }
  }
  return options;
}
describe("Dermalogica", function() {
  this.timeout(5000);
  it("This should check for open API products with product ID", function(done) {
    var key = "0000-00000-00000-0000";
    var productid = 1;
    var langCode = "en-US";
    var inputvalues = input(key, productid);
    request(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      //console.log(body);
      fun.plandc(body);
      done();
    })
  });
});
