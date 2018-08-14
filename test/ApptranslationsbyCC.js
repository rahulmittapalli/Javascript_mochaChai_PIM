var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');


function input(key, countryName) {
  var options = {
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + '/open/getTranslations/' + countryName,
    headers: {
      'API-KEY': key,
    }
  }
  return options;
}

function parameters(body) {
  var bodyKeys = ['countryCode', 'showChat', 'currencySymbol', 'currencyAbbreviation', 'LandingPage_title'];
  bodyKeys.every((prop) => {
    expect(body).to.have.own.property(prop);
    expect(body[prop]).to.be.a('string');
  })
}

describe("Dermalogica", function() {
  this.timeout(5000);
  it("This should check for ALL Open App translations products in the US", function(done) {
    this.timeout(5000);
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    var countryName = "CA";
    //var lang = langCode.split("-");
    //console.log(lang[1]);
    var inputvalues = input(key, countryName);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      parameters(body);
      expect(body.countryCode).to.be.equal(countryName);
      done();
    })
  });
});
