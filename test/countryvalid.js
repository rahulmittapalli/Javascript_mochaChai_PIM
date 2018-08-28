var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./main');
var subPath = "/open/countries/valid";

describe("Dermalogica Open Countries valid", function() {
  this.timeout(10000);
  it("Open countries Face Mapping Consumer", function(done) {
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    fun.country_requester(inputvalues, done);
  })
  it("Open countries Face Mapping Trade", function(done) {
    var key = "9881d86c-65f1-447d-aa7f-31bcb9381f65";
    var inputvalues = fun.input(key, subPath);
    fun.country_requester(inputvalues, done);
  })
  it("Open countries BioLumin-C", function(done) {
    var key = "f960530a-ba6f-463c-8f00-46e2071490f7";
    var inputvalues = fun.input(key, subPath);
    fun.country_requester(inputvalues, done);
  })
  it("Open countries Rapid Reveal", function(done) {
    var key = "54d8f9eb-c0fc-4dee-a55b-3abde4e0c94e";
    var inputvalues = fun.input(key, subPath);
    fun.country_requester(inputvalues, done);
  })
  it("Open countries FaceMapping.com", function(done) {
    var key = "5d24a390-b66e-4780-8d02-907bef2f778f";
    var inputvalues = fun.input(key, subPath);
    fun.country_requester(inputvalues, done);
  })
  it("Open countries Breakout predictor", function(done) {
    var key = "fbab80c2-362f-468e-98ab-7baa46e96874";
    var inputvalues = fun.input(key, subPath);
    fun.country_requester(inputvalues, done);
  })
});
