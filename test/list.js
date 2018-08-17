var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./function');

var subPath = "/open/recommends/list";


function call(body, count) {
  for (var i = 0; i < count; i++) {
    expect(body[i]).to.have.own.property('name');
    for (var j = 0; j < body[i].products.length; j++) {
      //console.log(body[i].products.length);
      expect(body[i].products[j]).to.have.own.property('name');
      expect(body[i].products[j].name).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('subtitle');
      expect(body[i].products[j].subtitle).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('description');
      expect(body[i].products[j].description).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('imageUrl');
      expect(body[i].products[j].imageUrl).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('thumbUrl');
      expect(body[i].products[j].thumbUrl).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('consumerIngredients');
      expect(body[i].products[j].consumerIngredients).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('ingredients');
      expect(body[i].products[j].ingredients).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('startDateTime');
      expect(body[i].products[j]).to.have.own.property('endDateTime');
      expect(body[i].products[j]).to.have.own.property('url');
      expect(body[i].products[j].url).to.be.a('string');
      expect(body[i].products[j]).to.have.own.property('id');
      expect(body[i].products[j].id).to.be.a('number');
      expect(body[i].products[j]).to.have.own.property('createdAt');
      expect(body[i].products[j]).to.have.own.property('updatedAt');
      expect(body[i].products[j]).to.have.own.property('productHasCategory');
      expect(body[i].products[j].productHasCategory).to.be.an('array');
      for (var k = 0; k < body[i].products[j].productHasCategory.length; k++) {
        expect(body[i].products[j].productHasCategory[k]).to.have.own.property('name');
      }
      expect(body[i].products[j]).to.have.own.property('productHasAttributes');
      expect(body[i].products[j].productHasAttributes).to.be.an('array');
      for (var k = 0; k < body[i].products[j].productHasAttributes.length; k++) {
        expect(body[i].products[j].productHasAttributes[k]).to.have.own.property('name');
      }
      expect(body[i].products[j]).to.have.own.property('productHasSizes');
      expect(body[i].products[j].productHasSizes).to.be.an('array');
      for (var k = 0; k < body[i].products[j].productHasSizes.length; k++) {
        expect(body[i].products[j].productHasSizes[k].products_has_sizes).to.have.own.property('imageUrl');
        expect(body[i].products[j].productHasSizes[k].products_has_sizes.imageUrl).to.be.a('string');
        var imageUrl = body[i].products[j].productHasSizes[k].products_has_sizes.imageUrl.length;
        //console.log("imageUrl =" + imageUrl);
        if (imageUrl === 0) {
          //console.log("Product Name is " + body[i].products[j].name);
          console.log("Product size imageUrl is missing in this product " + body[i].products[j].name);
        }
        expect(body[i].products[j].productHasSizes[k].products_has_sizes.imageUrl.length).to.be.above(1)
        expect(body[i].products[j].productHasSizes[k].products_has_sizes).to.have.own.property('thumbUrl');
        var thumbUrl = body[i].products[j].productHasSizes[k].products_has_sizes.thumbUrl.length;
        //console.log("thumbUrl =" + thumbUrl);
        if (thumbUrl === 0) {
          //console.log("Product Name is " + body[i].products[j].name);
          console.log("Product size thumbUrl is missing in this product " + body[i].products[j].name);
        }
        expect(body[i].products[j].productHasSizes[k].products_has_sizes.thumbUrl.length).to.be.above(1)
        expect(body[i].products[j].productHasSizes[k].products_has_sizes).to.have.own.property('siliconImage');
        var siliconImage = body[i].products[j].productHasSizes[k].products_has_sizes.siliconImage.length;
        //console.log("siliconImage =" + siliconImage);
        if (siliconImage === 0) {
          //console.log("Product Name is " + body[i].products[j].name);
          console.log("Product size siliconImage is missing in this product " + body[i].products[j].name);
        }
        expect(body[i].products[j].productHasSizes[k].products_has_sizes.siliconImage.length).to.be.above(1)
      }
      expect(body[i].products[j]).to.have.own.property('productHasIngredients');
      expect(body[i].products[j].productHasIngredients).to.be.an('array');
      for (var k = 0; k < body[i].products[j].productHasIngredients.length; k++) {
        expect(body[i].products[j].productHasIngredients[k]).to.have.own.property('name');
      }
      expect(body[i].products[j]).to.have.own.property('productHasProfessionalApplication');
      expect(body[i].products[j].productHasProfessionalApplication).to.be.an('array');
      expect(body[i].products[j]).to.have.own.property('topRecommendedProduct');
      expect(body[i].products[j].topRecommendedProduct).to.be.an('array');
      for (var k = 0; k < body[i].products[j].topRecommendedProduct.length; k++) {
        expect(body[i].products[j].topRecommendedProduct[k]).to.have.own.property('products_id');
      }
    }
  }
}

describe("Dermalogica Open list", function() {
  this.timeout(60000);
  it("Open list Face Mapping Consumer", function(done) {
    var count;
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open list Face Mapping Trade", function(done) {
    var count;
    var key = "9881d86c-65f1-447d-aa7f-31bcb9381f65";
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open list BioLumin-C", function(done) {
    var count;
    var key = "f960530a-ba6f-463c-8f00-46e2071490f7";
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open list Rapid Reveal", function(done) {
    var count;
    var key = "54d8f9eb-c0fc-4dee-a55b-3abde4e0c94e";
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open list FaceMapping.com", function(done) {
    var count;
    var key = "5d24a390-b66e-4780-8d02-907bef2f778f";
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open matrix Breakout predictor", function(done) {
    var count;
    var key = "fbab80c2-362f-468e-98ab-7baa46e96874";
    //console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      //console.log(body);
      call(body, count);
      done();
    })
  });
});
