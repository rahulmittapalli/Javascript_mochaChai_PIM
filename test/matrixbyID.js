var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./main');

describe("Dermalogica Open matrix", function() {
  this.timeout(60000);
  it("Face Mapping Consumer by ID", function(done) {
    var count;
    var key = "9881d86c-65f1-447d-aa7f-31bcb9381f65";
    var id = 9;
    var subPath="/open/recommends/matrix/" + id;
    var inputvalues = fun.input(key, subPath);
    fun.matrix_requester(inputvalues, done);
    })
});
