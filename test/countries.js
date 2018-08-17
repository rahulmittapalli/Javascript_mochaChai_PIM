var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

function parameters(body,bodyKeys,count)
{
  for (var i = 0; i < count; i++) {
  //console.log(bodyKeys);
//  console.log(body[i].name);
  bodyKeys.every((prop) =>{
    //console.log(body[i].hasOwnProperty(prop));
    expect(body[i]).to.have.own.property(prop);
    if(prop==='id')
    {
      expect(body[i][prop]).to.be.a('number');
    }
    else if (prop==='settingsKeyValues') {
      expect(body[i][prop]).to.be.an('object');
    }
    else {
      expect(body[i][prop]).to.be.a('string');

    }
})
}
}
describe("Dermalogica Open Countries", function() {
  it("Open countries Face Mapping Consumer", function(done) {
    var count;
    this.timeout(25000);
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/countries/valid',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      var bodyKeys=['id','name','code','currency','facebook','twitter','instagram','pinterest','ecommerce','settingsKeyValues','language','langCode'];
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(count);
      parameters(body,bodyKeys,count);
      // for (var i = 0; i < count; i++) {
      //   //var bodyKeys=Object.keys(body[i]);
      //   var bodyKeys=['id','name','code','currency','facebook','twitter','instagram','pinterest','ecommerce','settingsKeyValues','language','langCode']
      //   //console.log(bodyKeys);
      //   console.log(body[i].name);
      //   bodyKeys.every((prop) =>{
      //     //console.log(body[i].hasOwnProperty(prop));
      //     expect(body[i]).to.have.own.property(prop);
      //     if(prop==='id')
      //     {
      //       expect(body[i][prop]).to.be.a('number');
      //     }
      //     else if (prop==='settingsKeyValues') {
      //       expect(body[i][prop]).to.be.an('object');
      //     }
      //     else {
      //       expect(body[i][prop]).to.be.a('string');
      //
      //     }
      //
      //   })
      //   //console.log(body[i].language);
      //   //console.log(body[i].langCode);
      //
      //   // expect(body[i]).to.have.own.property('id');
      //   // expect(body[i].id).to.be.a('number');
      //   // expect(body[i]).to.have.own.property('name');
      //   // expect(body[i].name).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('code');
      //   // expect(body[i].code).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('currency');
      //   // expect(body[i].currency).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('facebook');
      //   // expect(body[i].facebook).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('twitter');
      //   // expect(body[i].twitter).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('instagram');
      //   // expect(body[i].instagram).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('pinterest');
      //   // expect(body[i].pinterest).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('ecommerce');
      //   // expect(body[i].ecommerce).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('settingsKeyValues');
      //   // expect(body[i].settingsKeyValues).to.be.an('object');
      //   // expect(body[i]).to.have.own.property('language');
      //   // expect(body[i].language).to.be.a('string');
      //   // expect(body[i]).to.have.own.property('langCode');
      //   // expect(body[i].langCode).to.be.a('string');
      // }
      done();
    })
  });
  it("Open countries Face Mapping Trade", function(done) {
    var count;
    this.timeout(25000);
    var key = "9881d86c-65f1-447d-aa7f-31bcb9381f65";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/countries/valid',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(count);
      for (var i = 0; i < count; i++) {
        //console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].id).to.be.a('number');
        expect(body[i]).to.have.own.property('name');
        expect(body[i].name).to.be.a('string');
        expect(body[i]).to.have.own.property('code');
        expect(body[i].code).to.be.a('string');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i].currency).to.be.a('string');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i].facebook).to.be.a('string');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i].twitter).to.be.a('string');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i].instagram).to.be.a('string');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i].pinterest).to.be.a('string');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i].ecommerce).to.be.a('string');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i].settingsKeyValues).to.be.an('object');
        expect(body[i]).to.have.own.property('language');
        expect(body[i].language).to.be.a('string');
        expect(body[i]).to.have.own.property('langCode');
        expect(body[i].langCode).to.be.a('string');
      }
      done();
    })
  });
  it("Open countries BioLumin-C", function(done) {
    var count;
    this.timeout(25000);
    var key = "f960530a-ba6f-463c-8f00-46e2071490f7";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/countries/valid',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(count);
      for (var i = 0; i < count; i++) {
      //  console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].id).to.be.a('number');
        expect(body[i]).to.have.own.property('name');
        expect(body[i].name).to.be.a('string');
        expect(body[i]).to.have.own.property('code');
        expect(body[i].code).to.be.a('string');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i].currency).to.be.a('string');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i].facebook).to.be.a('string');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i].twitter).to.be.a('string');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i].instagram).to.be.a('string');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i].pinterest).to.be.a('string');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i].ecommerce).to.be.a('string');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i].settingsKeyValues).to.be.an('object');
        expect(body[i]).to.have.own.property('language');
        expect(body[i].language).to.be.a('string');
        expect(body[i]).to.have.own.property('langCode');
        expect(body[i].langCode).to.be.a('string');
      }
      done();
    })
  });
  it("Open countries Rapid Reveal", function(done) {
    var count;
    this.timeout(25000);
    var key = "54d8f9eb-c0fc-4dee-a55b-3abde4e0c94e";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/countries/valid',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(count);
      for (var i = 0; i < count; i++) {
        //console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].id).to.be.a('number');
        expect(body[i]).to.have.own.property('name');
        expect(body[i].name).to.be.a('string');
        expect(body[i]).to.have.own.property('code');
        expect(body[i].code).to.be.a('string');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i].currency).to.be.a('string');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i].facebook).to.be.a('string');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i].twitter).to.be.a('string');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i].instagram).to.be.a('string');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i].pinterest).to.be.a('string');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i].ecommerce).to.be.a('string');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i].settingsKeyValues).to.be.an('object');
        expect(body[i]).to.have.own.property('language');
        expect(body[i].language).to.be.a('string');
        expect(body[i]).to.have.own.property('langCode');
        expect(body[i].langCode).to.be.a('string');
      }
      done();
    })
  });
  it("Open countries FaceMapping.com", function(done) {
    var count;
    this.timeout(25000);
    var key = "5d24a390-b66e-4780-8d02-907bef2f778f";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/countries/valid',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(count);
      for (var i = 0; i < count; i++) {
        //console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].id).to.be.a('number');
        expect(body[i]).to.have.own.property('name');
        expect(body[i].name).to.be.a('string');
        expect(body[i]).to.have.own.property('code');
        expect(body[i].code).to.be.a('string');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i].currency).to.be.a('string');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i].facebook).to.be.a('string');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i].twitter).to.be.a('string');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i].instagram).to.be.a('string');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i].pinterest).to.be.a('string');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i].ecommerce).to.be.a('string');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i].settingsKeyValues).to.be.an('object');
        expect(body[i]).to.have.own.property('language');
        expect(body[i].language).to.be.a('string');
        expect(body[i]).to.have.own.property('langCode');
        expect(body[i].langCode).to.be.a('string');
      }
      done();
    })
  });
  it("Open countries Breakout predictor", function(done) {
    var count;
    this.timeout(25000);
    var key = "fbab80c2-362f-468e-98ab-7baa46e96874";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/countries/valid',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(count);
      for (var i = 0; i < count; i++) {
        //console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].id).to.be.a('number');
        expect(body[i]).to.have.own.property('name');
        expect(body[i].name).to.be.a('string');
        expect(body[i]).to.have.own.property('code');
        expect(body[i].code).to.be.a('string');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i].currency).to.be.a('string');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i].facebook).to.be.a('string');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i].twitter).to.be.a('string');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i].instagram).to.be.a('string');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i].pinterest).to.be.a('string');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i].ecommerce).to.be.a('string');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i].settingsKeyValues).to.be.an('object');
        expect(body[i]).to.have.own.property('language');
        expect(body[i].language).to.be.a('string');
        expect(body[i]).to.have.own.property('langCode');
        expect(body[i].langCode).to.be.a('string');
      }
      done();
    })
  });

});
