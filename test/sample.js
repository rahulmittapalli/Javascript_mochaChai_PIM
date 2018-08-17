var rp = require('request-promise');
var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

describe("Sample", function() {
  it("Sample promise request", function(done) {
    var count;
    this.timeout(25000);
    var key = "0000-00000-00000-0000";
    var options = {
      method:'GET',
      resolveWithFullResponse:true,
      "rejectUnauthorized": false,
      url: env.hostname + env.APIver + '/open/categories',
      headers: {
        'API-KEY': key,
      }
    };
    //console.log(options);
    rp(options).then(function (res) {
      body = JSON.parse(res.body);
      //console.log(body);
      expect(res.statusCode).to.equal(200);
      var parent = body.length;
      //console.log(parent);
      for (var i = 0; i < parent; i++) {
        if (body[i].children) {
          var count = body[i].children.length;
          //console.log(count);
          for (var j = 0; j < count; j++) {
            //console.log(body[0]);
            //console.log(body[i].children[j].name);
            expect(body[i].children[j]).to.have.own.property('name');
            expect(body[i].children[j].name).to.not.to.be.null;
            expect(body[i].children[j]).to.have.own.property('description');
            expect(body[i].children[j]).to.have.own.property('imageUrl');
            expect(body[i].children[j]).to.have.own.property('url');
            expect(body[i].children[j]).to.have.own.property('youtubeurl');
            expect(body[i].children[j]).to.have.own.property('id');
            expect(body[i].children[j]).to.have.own.property('parentId');
            expect(body[i].children[j]).to.have.own.property('isActive');
            expect(body[i].children[j]).to.have.own.property('createdAt');
            expect(body[i].children[j]).to.have.own.property('updatedAt');
            expect(body[i].children[j]).to.have.own.property('createdBy');
            expect(body[i].children[j]).to.have.own.property('updatedBy');
          }
        }
        //console.log(body[i].name);
        expect(body[i]).to.have.own.property('name');
        expect(body[i].name).to.not.to.be.null;
        expect(body[i]).to.have.own.property('description');
        expect(body[i]).to.have.own.property('imageUrl');
        expect(body[i]).to.have.own.property('url');
        expect(body[i]).to.have.own.property('youtubeurl');
        expect(body[i]).to.have.own.property('id');
        expect(body[i]).to.have.own.property('parentId');
        expect(body[i]).to.have.own.property('isActive');
        expect(body[i]).to.have.own.property('createdAt');
        expect(body[i]).to.have.own.property('updatedAt');
        expect(body[i]).to.have.own.property('createdBy');
        expect(body[i]).to.have.own.property('updatedBy');
      }
    })
    .catch(function (err) {
      //console.log(err);
      done();
    });
  });
});
