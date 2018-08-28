var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./main');

describe("Dermalogica App translations", function() {
  this.timeout(10000);
  it("Open App translations by CountryCode", function(done) {
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    var countryName = "CA";
    var subPath = "/open/getTranslations/" + countryName;
    var inputvalues = fun.input(key, subPath);
    fun.app_requester(inputvalues, done);
  })
});
