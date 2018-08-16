var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

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

function requester(callback, key){
    return chai.request(env.hostname)
      .get(env.APIver + '/open/countries/valid')
      .set('API-KEY', key)
      .then(function(res) {
        callback(res.body, res);
      }).catch(err => {
        console.log('err', err);
      });
}

function callback(body, res){
    expect(res.statusCode).to.equal(200);
    var count = body.length;
    console.log(count);
    parameters(body, count);
}

describe("Dermalogica Open Countries", function() {
    
  it("Open countries Face Mapping Consumer", async () => {
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    let p = await requester(callback, key);
  });
  it("Open countries Face Mapping Consumer", async () => {
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    let p = await requester(callback, key);
  });
  it("Open countries Face Mapping Consumer", async () => {
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    let p = await requester(callback, key);
  });
  it("Open countries Face Mapping Consumer", async () => {
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    let p = await requester(callback, key);
  });
});
