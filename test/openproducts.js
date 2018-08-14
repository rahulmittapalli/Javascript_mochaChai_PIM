var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

describe("login", function(done) {
  it("login request", function(done) {
    var token;
    var count;
    this.timeout(25000);
    var key = "0000-00000-00000-0000";
    var options = {
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/products',
      headers: {
        'API-KEY': key,
      }
    };
    console.log(options);
    request.get(options, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(count);
      for (var i = 0; i < count; i++) {
        //console.log(body[0]);
        console.log(body[i].name);
        expect(body[i]).to.have.own.property('name');
        //  expect(body[i].name).to.be.equal('precleanse');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('subtitle');
        expect(body[i]).to.have.own.property('description');
        expect(body[i]).to.have.own.property('imageUrl');
        expect(body[i]).to.have.own.property('thumbUrl');
        expect(body[i]).to.have.own.property('consumerIngredients');
        expect(body[i]).to.have.own.property('ingredients');
        expect(body[i]).to.have.own.property('startDateTime');
        expect(body[i]).to.have.own.property('endDateTime');
        expect(body[i]).to.have.own.property('url');
        expect(body[i]).to.have.own.property('id');
        expect(body[i]).to.have.own.property('createdAt');
        expect(body[i]).to.have.own.property('updatedAt');
        expect(body[i]).to.have.own.property('productHasCategory');
        expect(body[i]).to.have.own.property('productHasAttributes');
        expect(body[i]).to.have.own.property('productHasSizes');
        expect(body[i]).to.have.own.property('productHasIngredients');
        expect(body[i]).to.have.own.property('productHasProfessionalApplication');
        expect(body[i]).to.have.own.property('topRecommendedProduct');
      }
      done();
    })
  });
});
