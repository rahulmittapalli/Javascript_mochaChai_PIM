var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');
var fun = require('./function');

var subPath = "/open/recommends/matrix";


function call(body, count) {
  for (var i = 0; i < count; i++) {
    for (var j = 0; j < body[i].length; j++) {
      console.log(body[i].length);
      expect(body[i][j]).to.have.own.property('name');
      expect(body[i][j].name).to.be.a('string');
      expect(body[i][j]).to.have.own.property('subtitle');
      expect(body[i][j].subtitle).to.be.a('string');
      expect(body[i][j]).to.have.own.property('description');
      expect(body[i][j].description).to.be.a('string');
      expect(body[i][j]).to.have.own.property('imageUrl');
      expect(body[i][j].imageUrl).to.be.a('string');
      expect(body[i][j]).to.have.own.property('thumbUrl');
      expect(body[i][j].thumbUrl).to.be.a('string');
      expect(body[i][j]).to.have.own.property('consumerIngredients');
      expect(body[i][j].consumerIngredients).to.be.a('string');
      expect(body[i][j]).to.have.own.property('ingredients');
      expect(body[i][j].ingredients).to.be.a('string');
      expect(body[i][j]).to.have.own.property('startDateTime');
      expect(body[i][j]).to.have.own.property('endDateTime');
      expect(body[i][j]).to.have.own.property('url');
      expect(body[i][j].url).to.be.a('string');
      expect(body[i][j]).to.have.own.property('id');
      expect(body[i][j].id).to.be.a('number');
      expect(body[i][j]).to.have.own.property('createdAt');
      expect(body[i][j]).to.have.own.property('updatedAt');
      expect(body[i][j]).to.have.own.property('productHasCategory');
      expect(body[i][j].productHasCategory).to.be.an('array');
      for (var k = 0; k < body[i][j].productHasCategory.length; k++) {
        expect(body[i][j].productHasCategory[k]).to.have.own.property('name');
      }
      expect(body[i][j]).to.have.own.property('productHasAttributes');
      expect(body[i][j].productHasAttributes).to.be.an('array');
      for (var k = 0; k < body[i][j].productHasAttributes.length; k++) {
        expect(body[i][j].productHasAttributes[k]).to.have.own.property('name');
      }
      expect(body[i][j]).to.have.own.property('productHasSizes');
      expect(body[i][j].productHasSizes).to.be.an('array');
      for (var k = 0; k < body[i][j].productHasSizes.length; k++) {
        expect(body[i][j].productHasSizes[k].products_has_sizes).to.have.own.property('imageUrl');
        expect(body[i][j].productHasSizes[k].products_has_sizes.imageUrl).to.be.a('string');
        var imageUrl = body[i][j].productHasSizes[k].products_has_sizes.imageUrl.length;
        console.log("imageUrl =" + imageUrl);
        if (imageUrl === 0) {
          console.log("Product Name is " + body[i][j].name);
          console.log("Product size imageUrl is missing in this product " + body[i][j].name);
        }
        expect(body[i][j].productHasSizes[k].products_has_sizes.imageUrl.length).to.be.above(1)
        expect(body[i][j].productHasSizes[k].products_has_sizes).to.have.own.property('thumbUrl');
        var thumbUrl = body[i][j].productHasSizes[k].products_has_sizes.thumbUrl.length;
        console.log("thumbUrl =" + thumbUrl);
        if (thumbUrl === 0) {
          console.log("Product Name is " + body[i][j].name);
          console.log("Product size thumbUrl is missing in this product " + body[i][j].name);
        }
        expect(body[i][j].productHasSizes[k].products_has_sizes.thumbUrl.length).to.be.above(1)
        expect(body[i][j].productHasSizes[k].products_has_sizes).to.have.own.property('siliconImage');
        var siliconImage = body[i][j].productHasSizes[k].products_has_sizes.siliconImage.length;
        console.log("siliconImage =" + siliconImage);
        if (siliconImage === 0) {
          console.log("Product Name is " + body[i][j].name);
          console.log("Product size siliconImage is missing in this product " + body[i][j].name);
        }
        expect(body[i][j].productHasSizes[k].products_has_sizes.siliconImage.length).to.be.above(1)
      }
      expect(body[i][j]).to.have.own.property('productHasIngredients');
      expect(body[i][j].productHasIngredients).to.be.an('array');
      for (var k = 0; k < body[i][j].productHasIngredients.length; k++) {
        expect(body[i][j].productHasIngredients[k]).to.have.own.property('name');
      }
      expect(body[i][j]).to.have.own.property('productHasProfessionalApplication');
      expect(body[i][j].productHasProfessionalApplication).to.be.an('array');
      expect(body[i][j]).to.have.own.property('topRecommendedProduct');
      expect(body[i][j].topRecommendedProduct).to.be.an('array');
      for (var k = 0; k < body[i][j].topRecommendedProduct.length; k++) {
        expect(body[i][j].topRecommendedProduct[k]).to.have.own.property('products_id');
      }
      expect(body[i][j]).to.have.own.property('product_has_matrix');
      expect(body[i][j].product_has_matrix).to.be.an('array');
      for (var k = 0; k < body[i][j].product_has_matrix.length; k++) {
        expect(body[i][j].product_has_matrix[k]).to.have.own.property('categories');
        expect(body[i][j].product_has_matrix[k]).to.have.own.property('types');
        for (var l = 0; l< body[i][j].product_has_matrix[k].categories.length; l++) {
        expect(body[i][j].product_has_matrix[k]).categories[l].to.have.own.property('name');
        }
        for (var l = 0; l< body[i][j].product_has_matrix[k].types.length; l++) {
        expect(body[i][j].product_has_matrix[k]).types[l].to.have.own.property('name');
      }
    }
    }
  }
}

describe("Dermalogica Open matrix", function() {
  this.timeout(60000);
  it("Open matrix Face Mapping Consumer", function(done) {
    var count;
    var key = "ef75a003-8dff-4698-8e3a-445ef976b2f1";
    console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open matrix Face Mapping Trade", function(done) {
    var count;
    var key = "9881d86c-65f1-447d-aa7f-31bcb9381f65";
    console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open matrix BioLumin-C", function(done) {
    var count;
    var key = "f960530a-ba6f-463c-8f00-46e2071490f7";
    console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open matrix Rapid Reveal", function(done) {
    var count;
    var key = "54d8f9eb-c0fc-4dee-a55b-3abde4e0c94e";
    console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open matrix FaceMapping.com", function(done) {
    var count;
    var key = "5d24a390-b66e-4780-8d02-907bef2f778f";
    console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(body);
      call(body, count);
      done();
    })
  });
  it("Open matrix Breakout predictor", function(done) {
    var count;
    var key = "fbab80c2-362f-468e-98ab-7baa46e96874";
    console.log(subPath);
    var inputvalues = fun.input(key, subPath);
    request.get(inputvalues, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      console.log(body);
      call(body, count);
      done();
    })
  });
});
