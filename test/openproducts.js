var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var subPath="/open/products";
var fun=require('./main');


describe("Dermalogica open products", function() {
  this.timeout(60000);
  it("Open products", function(done) {
    var key = "0000-00000-00000-0000";
    var inputvalues=fun.input(key,subPath);
    //console.log(inputvalues);
    fun.products_requester(inputvalues,done);
  });
});
