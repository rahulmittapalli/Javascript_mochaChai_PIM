var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun=require('./function');

// var de
//allcountries

function parameters(body) {
  var bodyKeys = ['countryCode', 'showChat', 'currencySymbol', 'currencyAbbreviation', 'LandingPage_title'];
  bodyKeys.every((prop) => {
    expect(body).to.have.own.property(prop);
    expect(body[prop]).to.be.a('string');
  })
}
function callback (body, res){
    body = JSON.parse(body);
    expect(res.statusCode).to.equal(200);
    var count = body.length;
    //console.log(count);
    parameters(body, count);
}
function requester (inputvalues, done, callback){
    request.get(inputvalues, function(err, res, body) {
      callback(body, res);
      done();
    })
}

describe("Dermalogica", function() {
  this.timeout(5000);
  it("This should check for ALL Open App translations products in the US", function(done) {
    this.timeout(5000);
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    var langCode = "en-US";
    //console.log(langCode);
    var subPath="/open/getTranslations/lang/"+langCode;
    var inputvalues = fun.input(key,subPath);
    requester(inputvalues, done,callback);
    })
  });
