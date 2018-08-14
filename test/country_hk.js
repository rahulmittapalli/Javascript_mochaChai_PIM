var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

function input(key) {
  var options = {
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + '/open/countries/valid',
    headers: {
      'API-KEY': key,
    }
  }
  return options;
}

function parameters(body, count) {
  var bodyKeys = ['id', 'name', 'code', 'currency', 'facebook', 'twitter', 'instagram', 'pinterest', 'ecommerce', 'settingsKeyValues', 'language', 'langCode'];
  for (var i = 0; i < count; i++) {
    console.log(body[i].name);
    bodyKeys.every((prop) => {
      expect(body[i]).to.have.own.property(prop);
      if (prop === 'id') {
        expect(body[i][prop]).to.be.a('number');
      } else if (prop === 'settingsKeyValues') {
        expect(body[i][prop]).to.be.an('object');
      } else {
        expect(body[i][prop]).to.be.a('string');
      }
    })
  }
}

function requester(inputvalues, done, callback){
    request.get(inputvalues, function(err, res, body) {
      callback(body, res);
      done();
    })
}

function callback(body, res){
    body = JSON.parse(body);
    expect(res.statusCode).to.equal(200);
    var count = body.length;
    console.log(count);
    parameters(body, count);
}

describe("Dermalogica Open Countries", function() {
  this.timeout(10000);
  it("Open countries Face Mapping Consumer", function(done) {
    var count;
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    var inputvalues = input(key);
    requester(inputvalues, done, callback);
  });
  it("Open countries Face Mapping Trade", function(done) {
    var count;
    var key = "9881d86c-65f1-447d-aa7f-31bcb9381f65";
    var inputvalues = input(key);
    requester(inputvalues, done, callback);
  });
  it("Open countries BioLumin-C", function(done) {
    var count;
    var key = "f960530a-ba6f-463c-8f00-46e2071490f7";
    var inputvalues = input(key);
    requester(inputvalues, done, callback);
  });
  it("Open countries Rapid Reveal", function(done) {
    var count;
    var key = "54d8f9eb-c0fc-4dee-a55b-3abde4e0c94e";
    var inputvalues = input(key);
    requester(inputvalues, done, callback);
  });
  it("Open countries FaceMapping.com", function(done) {
    var count;
    var key = "5d24a390-b66e-4780-8d02-907bef2f778f";
    var inputvalues = input(key);
    requester(inputvalues, done, callback);
  });
  it("Open countries Breakout predictor", function(done) {
    var count;
    var key = "fbab80c2-362f-468e-98ab-7baa46e96874";
    var inputvalues = input(key);
    requester(inputvalues, done, callback);
  });
});
