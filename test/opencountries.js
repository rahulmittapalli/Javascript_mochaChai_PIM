var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

describe("Open Countries", function(done) {
  it("Open countries Face Mapping Consumer", function(done) {
    var token;
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
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(count);
      for (var i = 0; i < count; i++) {
        console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('name');
        expect(body[i]).to.have.own.property('code');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i]).to.have.own.property('language');
        expect(body[i]).to.have.own.property('langCode');
      }
      done();
    })
  });
  it("Open countries Face Mapping Trade", function(done) {
    var token;
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
      console.log(count);
      for (var i = 0; i < count; i++) {
        console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('name');
        expect(body[i]).to.have.own.property('code');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i]).to.have.own.property('language');
        expect(body[i]).to.have.own.property('langCode');
      }
      done();
    })
  });
  it("Open countries BioLumin-C", function(done) {
    var token;
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
        console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('name');
        expect(body[i]).to.have.own.property('code');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i]).to.have.own.property('language');
        expect(body[i]).to.have.own.property('langCode');
      }
      done();
    })
  });
  it("Open countries Rapid Reveal", function(done) {
    var token;
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
        console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('name');
        expect(body[i]).to.have.own.property('code');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i]).to.have.own.property('language');
        expect(body[i]).to.have.own.property('langCode');
      }
      done();
    })
  });
  it("Open countries FaceMapping.com", function(done) {
    var token;
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
        console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('name');
        expect(body[i]).to.have.own.property('code');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i]).to.have.own.property('language');
        expect(body[i]).to.have.own.property('langCode');
      }
      done();
    })
  });
  it("Open countries Breakout predictor", function(done) {
    var token;
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
      console.log(count);
      for (var i = 0; i < count; i++) {
        console.log(body[i].name);
        //console.log(body[i].language);
        //console.log(body[i].langCode);
        expect(body[i]).to.have.own.property('id');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('name');
        expect(body[i]).to.have.own.property('code');
        expect(body[i]).to.have.own.property('currency');
        expect(body[i]).to.have.own.property('facebook');
        expect(body[i]).to.have.own.property('twitter');
        expect(body[i]).to.have.own.property('instagram');
        expect(body[i]).to.have.own.property('pinterest');
        expect(body[i]).to.have.own.property('ecommerce');
        expect(body[i]).to.have.own.property('settingsKeyValues');
        expect(body[i]).to.have.own.property('language');
        expect(body[i]).to.have.own.property('langCode');
      }
      done();
    })
  });

});
