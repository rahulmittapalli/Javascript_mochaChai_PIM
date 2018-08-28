var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./main');
var message = "No Recommendation for app";


describe("Dermalogica Open List", function() {
  this.timeout(60000);
  it("Face Mapping Consumer By ID", function(done) {
    var count;
    var key = "fbab80c2-362f-468e-98ab-7baa46e96874";
    var id = 7;
    var subPath="/open/recommends/list/" + id;
    var inputvalues = fun.input(key, subPath);
    fun.list_requester(inputvalues, done);
    })
});
