var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

describe("Dermalogica", function() {
  it("This should check for ALL Open products", function(done) {
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
      for (var i = 0; i < count; i++) {
        expect(body[i]).to.have.own.property('name');
        expect(body[i].name).to.be.a('string');
        expect(body[i]).to.have.own.property('subtitle');
        expect(body[i].subtitle).to.be.a('string');
        expect(body[i]).to.have.own.property('description');
        expect(body[i].description).to.be.a('string');
        expect(body[i]).to.have.own.property('imageUrl');
        expect(body[i].imageUrl).to.be.a('string');
        expect(body[i]).to.have.own.property('thumbUrl');
        expect(body[i].thumbUrl).to.be.a('string');
        expect(body[i]).to.have.own.property('consumerIngredients');
        expect(body[i].consumerIngredients).to.be.a('string');
        expect(body[i]).to.have.own.property('ingredients');
        expect(body[i].ingredients).to.be.a('string');
        expect(body[i]).to.have.own.property('startDateTime');
        expect(body[i]).to.have.own.property('endDateTime');
        expect(body[i]).to.have.own.property('url');
        expect(body[i].url).to.be.a('string');
        expect(body[i]).to.have.own.property('id');
        expect(body[i].id).to.be.a('number');
        expect(body[i]).to.have.own.property('createdAt');
        expect(body[i]).to.have.own.property('updatedAt');
        expect(body[i]).to.have.own.property('productHasCategory');
        expect(body[i].productHasCategory).to.be.an('array');
        for(var j=0;j<body[i].productHasCategory.length;j++)
        {
          expect(body[i].productHasCategory[j]).to.have.own.property('name');
        }
        expect(body[i]).to.have.own.property('productHasAttributes');
        expect(body[i].productHasAttributes).to.be.an('array');
        for(var j=0;j<body[i].productHasAttributes.length;j++)
        {
          expect(body[i].productHasAttributes[j]).to.have.own.property('name');
        }
        expect(body[i]).to.have.own.property('productHasSizes');
        expect(body[i].productHasSizes).to.be.an('array');
        for(var j=0;j<body[i].productHasSizes.length;j++)
        {
          expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('imageUrl');
          expect(body[i].productHasSizes[j].products_has_sizes.imageUrl).to.be.a('string');
          console.log(body[i].productHasSizes[j].products_has_sizes.imageUrl.length);
          expect(body[i].productHasSizes[j].products_has_sizes.imageUrl.length).to.be.above(1)
          expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('thumbUrl');
          console.log(body[i].productHasSizes[j].products_has_sizes.thumbUrl.length);
          expect(body[i].productHasSizes[j].products_has_sizes.thumbUrl.length).to.be.above(1)
          expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('siliconImage');
          console.log(body[i].productHasSizes[j].products_has_sizes.siliconImage.length);
        }
        expect(body[i]).to.have.own.property('productHasIngredients');
        expect(body[i].productHasIngredients).to.be.an('array');
        for(var j=0;j<body[i].productHasIngredients.length;j++)
        {
          expect(body[i].productHasIngredients[j]).to.have.own.property('name');
        }
        expect(body[i]).to.have.own.property('productHasProfessionalApplication');
        expect(body[i].productHasProfessionalApplication).to.be.an('array');
         expect(body[i]).to.have.own.property('topRecommendedProduct');
         expect(body[i].topRecommendedProduct).to.be.an('array');
         for(var j=0;j<body[i].topRecommendedProduct.length;j++)
         {
           expect(body[i].topRecommendedProduct[j]).to.have.own.property('product_id');
         }
      }
      setTimeout(done, 25000);
    })
  });
});
