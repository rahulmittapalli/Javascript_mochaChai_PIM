var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./main');


describe("Dermalogica", function() {
  this.timeout(60000);
  it("This should check for ALL Open products", function(done) {
    var key = "0000-00000-00000-0000";
    var productid = 223;
    var langCode = "en-US";
    var subPath = "/open/products/" + productid + "/" + langCode;
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    //console.log(inputvalues);
    fun.products_requester(inputvalues, done);
  });
});
