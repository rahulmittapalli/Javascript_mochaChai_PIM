var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./main');


describe("Dermalogica Open products", function() {
  this.timeout(60000);
  it("Open products by ID", function(done) {
    var key = "0000-00000-00000-0000";
    var productid = 1;
    var subPath = "/open/products/" + productid;
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    //console.log(inputvalues);
    fun.products_requester(inputvalues, done);
  });
});
