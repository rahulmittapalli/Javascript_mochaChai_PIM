var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

var input = function (key, subPath) {
  var options = {
    method:'GET',
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + subPath,
    headers: {
      'API-KEY': key,
    }
  }
  //console.log(options);
  return options;
}

var parameters = function (body, count) {
  var bodyKeys = ['id', 'name', 'code', 'currency', 'facebook', 'twitter', 'instagram', 'pinterest', 'ecommerce', 'settingsKeyValues', 'language', 'langCode'];
  for (var i = 0; i < count; i++) {
    //console.log(body[i].name);
    if(body[i].langCode){
  //  console.log("LangCodes are "+body[i].langCode);
    }
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
var callback=function (body, res){
    body = JSON.parse(body);
    expect(res.statusCode).to.equal(200);
    var count = body.length;
    //console.log(count);
    parameters(body, count);
}
var requester=function (inputvalues, done, callback){
    request(inputvalues, function(err, res, body) {
      callback(body, res);
      done();
    })
}

var matrixcall=function(body,count){
    for (var i = 0; i < count; i++) {
      for (var j = 0; j < body[i].length; j++) {
        //console.log(body[i].length);
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
          //console.log("imageUrl =" + imageUrl);
          if (imageUrl === 0) {
            //console.log("Product Name is " + body[i][j].name);
            console.log("Product size imageUrl is missing in this product " + body[i][j].name);
          }
          expect(body[i][j].productHasSizes[k].products_has_sizes.imageUrl.length).to.be.above(1)
          expect(body[i][j].productHasSizes[k].products_has_sizes).to.have.own.property('thumbUrl');
          var thumbUrl = body[i][j].productHasSizes[k].products_has_sizes.thumbUrl.length;
          //console.log("thumbUrl =" + thumbUrl);
          if (thumbUrl === 0) {
            //console.log("Product Name is " + body[i][j].name);
            console.log("Product size thumbUrl is missing in this product " + body[i][j].name);
          }
          expect(body[i][j].productHasSizes[k].products_has_sizes.thumbUrl.length).to.be.above(1)
          expect(body[i][j].productHasSizes[k].products_has_sizes).to.have.own.property('siliconImage');
          var siliconImage = body[i][j].productHasSizes[k].products_has_sizes.siliconImage.length;
          //console.log("siliconImage =" + siliconImage);
          if (siliconImage === 0) {
            //console.log("Product Name is " + body[i][j].name);
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

  var listcall=function (body, count) {
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
var productscall= function(body,count)
{
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
      var imageUrl=body[i].productHasSizes[j].products_has_sizes.imageUrl.length;
      //console.log("imageUrl ="+imageUrl);
      if(imageUrl===0)
      {
        //console.log("Product Name is "+body[i].name);
        console.log("Product size imageUrl is missing in this product "+body[i].name);
      }
      expect(body[i].productHasSizes[j].products_has_sizes.imageUrl.length).to.be.above(1)
      expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('thumbUrl');
      var thumbUrl=body[i].productHasSizes[j].products_has_sizes.thumbUrl.length;
      //console.log("thumbUrl ="+thumbUrl);
      if(thumbUrl===0)
      {
        //console.log("Product Name is "+body[i].name);
        console.log("Product size thumbUrl is missing in this product "+body[i].name);
      }
      expect(body[i].productHasSizes[j].products_has_sizes.thumbUrl.length).to.be.above(1)
      expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('siliconImage');
      var siliconImage=body[i].productHasSizes[j].products_has_sizes.siliconImage.length;
      //console.log("siliconImage ="+siliconImage);
      if(siliconImage===0)
      {
        //console.log("Product Name is "+body[i].name);
        console.log("Product size siliconImage is missing in this product "+body[i].name);
      }
      expect(body[i].productHasSizes[j].products_has_sizes.siliconImage.length).to.be.above(1)
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
}

module.exports={
  input:input,
  parameters:parameters,
  callback:callback,
  requester:requester,
  matrixcall:matrixcall,
  listcall:listcall,
  productscall:productscall
}
