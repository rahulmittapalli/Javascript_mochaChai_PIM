var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun=require('./function');

var subPath="/open/products";

describe("Dermalogica", function() {
  it("This should check for ALL Open products", function(done) {
    var count;
    this.timeout(45000);
    var key = "0000-00000-00000-0000";
    var inputvalues=fun.input(key,subPath);
    console.log(inputvalues);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      fun.productscall(body,count);
      done();
    })
  });
});
