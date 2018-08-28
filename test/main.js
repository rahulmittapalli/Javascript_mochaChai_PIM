var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');

var input = function(key, subPath) {
  var options = {
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + subPath,
    headers: {
      'API-KEY': key,
    }
  }
  return options;
}

var app_callback = function(body, res) {
  body = JSON.parse(body);
  expect(res.statusCode).to.equal(200);
  app_parameters(body);
}

var app_requester = function(inputvalues, done) {
  //console.log(inputvalues);
  request.get(inputvalues, function(err, res, body) {
    app_callback(body, res);
    done();
  })
}

var app_parameters = function(body) {
  var bodyKeys = ['countryCode', 'showChat', 'currencySymbol', 'currencyAbbreviation', 'LandingPage_title'];
  bodyKeys.forEach((prop) => {
    expect(body).to.have.own.property(prop);
    expect(body[prop]).to.be.a('string');
  })
}

var country_requester = function(inputvalues, done) {
  //console.log(inputvalues);
  request.get(inputvalues, function(err, res, body) {
    country_callback(body, res);
    done();
  })
}

var country_callback = function(body, res) {
  body = JSON.parse(body);
  expect(res.statusCode).to.equal(200);
  country_parameters(body);
}
var country_parameters = function(body, count) {
  var bodyKeys = ['id', 'name', 'code', 'currency', 'facebook', 'twitter', 'instagram', 'pinterest', 'ecommerce',
    'settingsKeyValues', 'language', 'langCode'
  ];
  for (var i = 0; i < count; i++) {
    //console.log(body[i].name);
    bodyKeys.forEach((prop) => {
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

var list_callback = function(body, res) {
  var count;
  body = JSON.parse(body);
  if (res.statusCode === 400) {
    expect(res.statusCode).to.equal(400);
  } else {
    expect(res.statusCode).to.equal(200);
    count = body.length;
    list_parameters(body, count);
  }
}

var list_requester = function(inputvalues, done) {
  //console.log(inputvalues);
  request.get(inputvalues, function(err, res, body) {
    list_callback(body, res);
    done();
  })
}

var list_parameters = function(body, count) {
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
        var imageUrl = body[i].products[j].productHasSizes[k].products_has_sizes.imageUrl;
        //console.log("imageUrl =" + imageUrl);
        if (imageUrl === '' || imageUrl === null || imageUrl === undefined) {
          //console.log("Product Name is " + body[i].products[j].name);
          console.log("Product size imageUrl is missing in this product " + body[i].products[j].name);
        }
        expect(body[i].products[j].productHasSizes[k].products_has_sizes.imageUrl.length).to.be.above(1)
        expect(body[i].products[j].productHasSizes[k].products_has_sizes).to.have.own.property('thumbUrl');
        var thumbUrl = body[i].products[j].productHasSizes[k].products_has_sizes.thumbUrl;
        //console.log("thumbUrl =" + thumbUrl);
        if (thumbUrl === '' || thumbUrl === null || thumbUrl === undefined) {
          //console.log("Product Name is " + body[i].products[j].name);
          console.log("Product size thumbUrl is missing in this product " + body[i].products[j].name);
        }
        expect(body[i].products[j].productHasSizes[k].products_has_sizes.thumbUrl.length).to.be.above(1)
        expect(body[i].products[j].productHasSizes[k].products_has_sizes).to.have.own.property('siliconImage');
        var siliconImage = body[i].products[j].productHasSizes[k].products_has_sizes.siliconImage;
        //console.log("siliconImage =" + siliconImage);
        if (siliconImage === '' || siliconImage === null || siliconImage === undefined) {
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

var matrix_callback = function(body, res) {
  var count;
  //console.log(res.statusCode);
  //console.log(body);
  if (res.statusCode === 400) {
    expect(res.statusCode).to.equal(400);
    //console.log(body);
  } else {
    body = JSON.parse(body);
    expect(res.statusCode).to.equal(200);
    //console.log(body);
    count = body.length;
    //console.log(count);
    matrix_parameters(body, count);
  }
}

var matrix_requester = function(inputvalues, done) {
  //console.log(inputvalues);
  request.get(inputvalues, function(err, res, body) {
    //console.log(body);
    matrix_callback(body, res);
    done();
  })
}


function matrix_parameters(body, count) {
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
        var imageUrl = body[i][j].productHasSizes[k].products_has_sizes.imageUrl;
        //console.log("imageUrl =" + imageUrl);
        if (imageUrl === '' || imageUrl === null || imageUrl === undefined) {
          //console.log("Product Name is " + body[i][j].name);
          console.log("Product size imageUrl is missing in this product " + body[i][j].name);
        }
        expect(body[i][j].productHasSizes[k].products_has_sizes.imageUrl.length).to.be.above(1)
        expect(body[i][j].productHasSizes[k].products_has_sizes).to.have.own.property('thumbUrl');
        var thumbUrl = body[i][j].productHasSizes[k].products_has_sizes.thumbUrl;
        //console.log("thumbUrl =" + thumbUrl);
        if (thumbUrl === '' || thumbUrl === null || thumbUrl === undefined) {
          //console.log("Product Name is " + body[i][j].name);
          console.log("Product size thumbUrl is missing in this product " + body[i][j].name);
        }
        expect(body[i][j].productHasSizes[k].products_has_sizes.thumbUrl.length).to.be.above(1)
        expect(body[i][j].productHasSizes[k].products_has_sizes).to.have.own.property('siliconImage');
        var siliconImage = body[i][j].productHasSizes[k].products_has_sizes.siliconImage;
        //console.log("siliconImage =" + siliconImage);
        if (siliconImage === '' || siliconImage === null || siliconImage === undefined) {
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
        for (var l = 0; l < body[i][j].product_has_matrix[k].categories.length; l++) {
          expect(body[i][j].product_has_matrix[k]).categories[l].to.have.own.property('name');
        }
        for (var l = 0; l < body[i][j].product_has_matrix[k].types.length; l++) {
          expect(body[i][j].product_has_matrix[k]).types[l].to.have.own.property('name');
        }
      }
    }
  }
}

var category_callback = function(body, res) {
  var count;
  body = JSON.parse(body);
  var length;
  category_parameters(body, count, length);
}

var category_requester = function(inputvalues, done) {
  //console.log(inputvalues);
  request.get(inputvalues, function(err, res, body) {
    category_callback(body, res);
    done();
  })
}

var category_parameters = function(body, count, length) {
  var bodyKeys = ['name', 'description', 'imageUrl', 'url', 'youtubeurl', 'id', 'parentId', 'isActive', 'createdAt', 'updatedAt', 'createdBy', 'updatedBy', 'categoryHasProducts'];
  var count = body.length;
  //console.log("count", count);
  for (var i = 0; i < count; i++) {
    bodyKeys.forEach((prop) => {
      //console.log(prop);
      expect(body[i]).to.have.own.property(prop);
      //console.log("main name is", body[i].name);
    })
    if (body[i].children) {
      var length = body[i].children.length;
      //console.log(length);
      //console.log(count);
      for (var j = 0; j < length; j++) {
        bodyKeys.forEach((prop) => {
          expect(body[i].children[j]).to.have.own.property(prop);
          //console.log("children name ", body[i].children[j].name);

        })
      }
    }
  }
}

var category_callbackbyID = function(body, res) {
  var count;
  body = JSON.parse(body);
  //console.log(body);
  var length;
  category_parametersbyID(body, count);
}

var category_requesterbyID = function(inputvalues, done) {
  //console.log(inputvalues);
  request.get(inputvalues, function(err, res, body) {
    category_callbackbyID(body, res);
    done();
  })
}

var category_parametersbyID = function(body, count) {
  var bodyKeys = ['name', 'description', 'imageUrl', 'url', 'youtubeurl', 'id', 'parentId', 'isActive', 'createdAt', 'updatedAt', 'createdBy', 'updatedBy', 'categoryHasProducts'];
  var count;
  if (typeof body === 'object') {
    count = Object.keys(body.categoryHasProducts).length;
  }
  bodyKeys.forEach((prop) => {
    expect(body).to.have.own.property(prop);
  })
  for (var i = 0; i < count; i++) {
    expect(body.categoryHasProducts[i]).to.have.own.property('name');
    expect(body.categoryHasProducts[i].name).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('subtitle');
    expect(body.categoryHasProducts[i].subtitle).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('description');
    expect(body.categoryHasProducts[i].description).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('imageUrl');
    expect(body.categoryHasProducts[i].imageUrl).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('thumbUrl');
    expect(body.categoryHasProducts[i].thumbUrl).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('consumerIngredients');
    expect(body.categoryHasProducts[i].consumerIngredients).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('ingredients');
    expect(body.categoryHasProducts[i].ingredients).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('startDateTime');
    expect(body.categoryHasProducts[i]).to.have.own.property('endDateTime');
    expect(body.categoryHasProducts[i]).to.have.own.property('url');
    expect(body.categoryHasProducts[i].url).to.be.a('string');
    expect(body.categoryHasProducts[i]).to.have.own.property('id');
    expect(body.categoryHasProducts[i].id).to.be.a('number');
    expect(body.categoryHasProducts[i]).to.have.own.property('createdAt');
    expect(body.categoryHasProducts[i]).to.have.own.property('updatedAt');
    expect(body.categoryHasProducts[i]).to.have.own.property('productHasCategory');
    expect(body.categoryHasProducts[i].productHasCategory).to.be.an('array');
    for (var j = 0; j < body.categoryHasProducts[i].productHasCategory.length; j++) {
      expect(body.categoryHasProducts[i].productHasCategory[j]).to.have.own.property('name');
      expect(body.categoryHasProducts[i].productHasCategory[j].categories_has_products).to.have.own.property('products_id');

    }
    expect(body.categoryHasProducts[i]).to.have.own.property('productHasAttributes');
    expect(body.categoryHasProducts[i].productHasAttributes).to.be.an('array');
    for (var j = 0; j < body.categoryHasProducts[i].productHasAttributes.length; j++) {
      expect(body.categoryHasProducts[i].productHasAttributes[j]).to.have.own.property('name');
      expect(body.categoryHasProducts[i].productHasAttributes[j].products_has_attrributes).to.have.own.property('value');

    }
    expect(body.categoryHasProducts[i]).to.have.own.property('productHasSizes');
    expect(body.categoryHasProducts[i].productHasSizes).to.be.an('array');
    for (var j = 0; j < body.categoryHasProducts[i].productHasSizes.length; j++) {
      expect(body.categoryHasProducts[i].productHasSizes[j].products_has_sizes).to.have.own.property('imageUrl');
      expect(body.categoryHasProducts[i].productHasSizes[j].products_has_sizes.imageUrl).to.be.a('string');
      var imageUrl = body.categoryHasProducts[i].productHasSizes[j].products_has_sizes.imageUrl;
      //console.log("imageUrl ="+imageUrl);
      if (imageUrl === '' || imageUrl === null || imageUrl === undefined) {
        //console.log("Product Name is "+body.categoryHasProducts[i].name);
        console.log("Product size imageUrl is missing in this product " + body.categoryHasProducts[i].name);
      }
      expect(body.categoryHasProducts[i].productHasSizes[j].products_has_sizes.imageUrl.length).to.be.above(1)
      expect(body.categoryHasProducts[i].productHasSizes[j].products_has_sizes).to.have.own.property('thumbUrl');
      var thumbUrl = body.categoryHasProducts[i].productHasSizes[j].products_has_sizes.thumbUrl;
      //console.log("thumbUrl ="+thumbUrl);
      if (thumbUrl === '' || thumbUrl === null || thumbUrl === undefined) {
        //console.log("Product Name is "+body.categoryHasProducts[i].name);
        console.log("Product size thumbUrl is missing in this product " + body.categoryHasProducts[i].name);
      }
      expect(body.categoryHasProducts[i].productHasSizes[j].products_has_sizes.thumbUrl.length).to.be.above(1)
      expect(body.categoryHasProducts[i].productHasSizes[j].products_has_sizes).to.have.own.property('siliconImage');
      var siliconImage = body.categoryHasProducts[i].productHasSizes[j].products_has_sizes.siliconImage;
      //console.log("i and j values are " +i ,j);
      //console.log("siliconImage ="+siliconImage);
      if (siliconImage === '' || siliconImage === null || siliconImage === undefined) {
        //console.log("Product Name is "+body.categoryHasProducts[i].name);
        console.log("Product size siliconImage is missing in this product " + body.categoryHasProducts[i].name);
      }
      expect(body.categoryHasProducts[i].productHasSizes[j].products_has_sizes.siliconImage.length).to.be.above(1)
    }
    expect(body.categoryHasProducts[i]).to.have.own.property('productHasIngredients');
    expect(body.categoryHasProducts[i].productHasIngredients).to.be.an('array');
    for (var j = 0; j < body.categoryHasProducts[i].productHasIngredients.length; j++) {
      expect(body.categoryHasProducts[i].productHasIngredients[j]).to.have.own.property('name');
      expect(body.categoryHasProducts[i].productHasIngredients[j].products_has_ingredients).to.have.own.property('products_id');

    }
    expect(body.categoryHasProducts[i]).to.have.own.property('productHasProfessionalApplication');
    expect(body.categoryHasProducts[i].productHasProfessionalApplication).to.be.an('array');
    expect(body.categoryHasProducts[i]).to.have.own.property('topRecommendedProduct');
    expect(body.categoryHasProducts[i].topRecommendedProduct).to.be.an('array');
    for (var j = 0; j < body.categoryHasProducts[i].topRecommendedProduct.length; j++) {
      expect(body.categoryHasProducts[i].topRecommendedProduct[j]).to.have.own.property('products_id');
    }
    expect(body.categoryHasProducts[i]).to.have.own.property('priority');
  }
}

var products_callback = function(body, res) {
  body = JSON.parse(body);
  var count = 0;
  if (Array.isArray(body)) {
    count = body.length;
  } else if (typeof body === 'object') {
    count = 1;
  }
  expect(res.statusCode).to.equal(200);
  products_parameters(body, count);
}

var products_requester = function(inputvalues, done) {
  //console.log(inputvalues);
  request.get(inputvalues, function(err, res, body) {
    products_callback(body, res);
    done();
  })
}
var products_parameters = function(body, count) {
  var allproducts;
  for (var i = 0; i < count; i++) {
    if (Array.isArray(body)) {
      allproducts = body[i];
    } else if (typeof body === 'object') {
      allproducts = body;
    }
    expect(allproducts).to.have.own.property('name');
    expect(allproducts.name).to.be.a('string');
    expect(allproducts).to.have.own.property('subtitle');
    expect(allproducts.subtitle).to.be.a('string');
    expect(allproducts).to.have.own.property('description');
    expect(allproducts.description).to.be.a('string');
    expect(allproducts).to.have.own.property('imageUrl');
    expect(allproducts.imageUrl).to.be.a('string');
    expect(allproducts).to.have.own.property('thumbUrl');
    expect(allproducts.thumbUrl).to.be.a('string');
    expect(allproducts).to.have.own.property('consumerIngredients');
    expect(allproducts.consumerIngredients).to.be.a('string');
    expect(allproducts).to.have.own.property('ingredients');
    expect(allproducts.ingredients).to.be.a('string');
    expect(allproducts).to.have.own.property('startDateTime');
    expect(allproducts).to.have.own.property('endDateTime');
    expect(allproducts).to.have.own.property('url');
    expect(allproducts.url).to.be.a('string');
    expect(allproducts).to.have.own.property('id');
    expect(allproducts.id).to.be.a('number');
    expect(allproducts).to.have.own.property('createdAt');
    expect(allproducts).to.have.own.property('updatedAt');
    expect(allproducts).to.have.own.property('productHasCategory');
    expect(allproducts.productHasCategory).to.be.an('array');
    for (var j = 0; j < allproducts.productHasCategory.length; j++) {
      expect(allproducts.productHasCategory[j]).to.have.own.property('name');
      expect(allproducts.productHasCategory[j].categories_has_products).to.have.own.property('products_id');
    }
    expect(allproducts).to.have.own.property('productHasAttributes');
    expect(allproducts.productHasAttributes).to.be.an('array');
    for (var j = 0; j < allproducts.productHasAttributes.length; j++) {
      expect(allproducts.productHasAttributes[j]).to.have.own.property('name');
      expect(allproducts.productHasAttributes[j].products_has_attrributes).to.have.own.property('value');
    }
    expect(allproducts).to.have.own.property('productHasSizes');
    expect(allproducts.productHasSizes).to.be.an('array');
    for (var j = 0; j < allproducts.productHasSizes.length; j++) {
      expect(allproducts.productHasSizes[j].products_has_sizes).to.have.own.property('imageUrl');
      expect(allproducts.productHasSizes[j].products_has_sizes.imageUrl).to.be.a('string');
      var imageUrl = allproducts.productHasSizes[j].products_has_sizes.imageUrl;
      //console.log("imageUrl ="+imageUrl);
      if (imageUrl === '' || imageUrl === null || imageUrl === undefined) {
        //console.log("Product Name is "+allproducts.name);
        console.log("Product size imageUrl is missing in this product " + allproducts.name);
      }
      expect(allproducts.productHasSizes[j].products_has_sizes.imageUrl.length).to.be.above(1)
      expect(allproducts.productHasSizes[j].products_has_sizes).to.have.own.property('thumbUrl');
      var thumbUrl = allproducts.productHasSizes[j].products_has_sizes.thumbUrl;
      //console.log("thumbUrl ="+thumbUrl);
      if (thumbUrl === '' || thumbUrl === null || thumbUrl === undefined) {
        //console.log("Product Name is "+allproducts.name);
        console.log("Product size thumbUrl is missing in this product " + allproducts.name);
      }
      expect(allproducts.productHasSizes[j].products_has_sizes.thumbUrl.length).to.be.above(1)
      expect(allproducts.productHasSizes[j].products_has_sizes).to.have.own.property('siliconImage');
      var siliconImage = allproducts.productHasSizes[j].products_has_sizes.siliconImage;
      //console.log("i and j values are " +i ,j);
      //console.log("siliconImage ="+siliconImage);
      if (siliconImage === '' || siliconImage === null || siliconImage === undefined) {
        //console.log("Product Name is "+allproducts.name);
        console.log("Product size siliconImage is missing in this product " + allproducts.name);
      }
      expect(allproducts.productHasSizes[j].products_has_sizes.siliconImage.length).to.be.above(1)
    }
    expect(allproducts).to.have.own.property('productHasIngredients');
    expect(allproducts.productHasIngredients).to.be.an('array');
    for (var j = 0; j < allproducts.productHasIngredients.length; j++) {
      expect(allproducts.productHasIngredients[j]).to.have.own.property('name');
      expect(allproducts.productHasIngredients[j].products_has_ingredients).to.have.own.property('products_id');
    }
    expect(allproducts).to.have.own.property('productHasProfessionalApplication');
    expect(allproducts.productHasProfessionalApplication).to.be.an('array');
    expect(allproducts).to.have.own.property('topRecommendedProduct');
    expect(allproducts.topRecommendedProduct).to.be.an('array');
    for (var j = 0; j < allproducts.topRecommendedProduct.length; j++) {
      expect(allproducts.topRecommendedProduct[j]).to.have.own.property('product_id');
    }
  }
}


module.exports = {
  input: input,
  app_parameters: app_parameters,
  app_callback: app_callback,
  app_requester: app_requester,
  country_parameters: country_parameters,
  country_callback: country_callback,
  country_requester: country_requester,
  list_callback: list_callback,
  list_requester: list_requester,
  list_parameters: list_parameters,
  matrix_callback: matrix_callback,
  matrix_requester: matrix_requester,
  matrix_parameters: matrix_parameters,
  category_callback: category_callback,
  category_parameters: category_parameters,
  category_requester: category_requester,
  products_callback: products_callback,
  products_parameters: products_parameters,
  products_requester: products_requester,
  category_callbackbyID: category_callbackbyID,
  category_parametersbyID: category_parametersbyID,
  category_requesterbyID: category_requesterbyID
}
