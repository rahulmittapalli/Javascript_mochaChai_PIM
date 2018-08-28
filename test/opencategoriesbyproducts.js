var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun=require('./main');


describe("Dermalogica Categories", function() {
  this.timeout(25000);
  it("Open Categories by products ID", function(done) {
    var key = "0000-00000-00000-0000";
    var id=5;
    var subPath="/open/categories/productsByCategories/" +id;
    var inputvalues=fun.input(key,subPath);
    fun.category_requesterbyID(inputvalues,done);
  })
});
