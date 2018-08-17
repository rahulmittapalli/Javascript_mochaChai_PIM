var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');


function inputvalues() {
  var key = "0000-00000-00000-0000";
  var options = {
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + '/open/products',
    headers: {
      'API-KEY': key,
    }
  };
  return options;
}

function implement(body, count) {
  for (var i = 0; i < count; i++) {
    var bodyKeys = ['name', 'subtitle', 'description', 'imageUrl', 'thumbUrl', 'consumerIngredients', 'ingredients', 'url', 'startDateTime', 'endDateTime', 'createdAt', 'updatedAt'];
    var idkeys = ['id'];
    var arraylist = ['productHasCategory', 'productHasAttributes', 'productHasSizes', 'productHasIngredients', 'productHasProfessionalApplication', 'topRecommendedProduct'];
    var images = ['imageUrl', 'thumbUrl', 'siliconImage'];
    bodyKeys.every((prop) => {
      expect(body[i]).to.have.own.property(prop);
      if (prop === bodyKeys) {
        //console.log(prop);
        expect(body[i][prop]).to.be.a('string');
      }
    });
    idkeys.every((prop) => {
      expect(body[i]).to.have.own.property(prop);
      if (prop === idkeys) {
        expect(body[i][prop]).to.be.an('number');
      }
    });
    arraylist.every((prop) => {
      expect(body[i]).to.have.own.property(prop);
      if (prop === arraylist) {
        expect(body[i][prop]).to.be.an('array');
      }
    });
    images.every((prop) => {
      expect(body[i]).to.have.own.property(prop);
      if (prop === images) {
        expect(body[i][prop]).to.be.an('string');
      }
    });
}
}

function checkName(arr, prop) {
  for (var j = 0; j < arr.length; j++) {
    expect(arr[j]).to.have.own.property(prop);
  }
}

function checklength(arr, prop) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].prop.length === 0) {
      //console.log(body[i].name);
    }
  }
}

  describe("Dermalogica", function() {
    this.timeout(35000);
    it("This should check for ALL Open products", function(done) {
      var count;
      var inputvalue = inputvalues();
      //console.log(inputvalue);
      request.get(inputvalue, function(err, res, body) {
        body = JSON.parse(body);
        expect(res.statusCode).to.equal(200);
        var count = body.length;
        //console.log(count);
        //console.log(body);
        implement(body, count)
        for (var i = 0; i < count; i++) {
          checkName(body[i].productHasCategory, 'name');
          checkName(body[i].productHasAttributes, 'name');
          checkName(body[i].productHasSizes, 'id');
          checkName(body[i].productHasIngredients, 'name');
          checkName(body[i].topRecommendedProduct, 'product_id');
          checkName(body[i].productHasSizes[j].products_has_sizes, 'imageUrl');
          checkName(body[i].productHasSizes[j].products_has_sizes, 'thumbUrl');
          checkName(body[i].productHasSizes[j].products_has_sizes, 'siliconImage');
          checklength(body[i].productHasSizes[j].products_has_sizes, 'imageUrl');
          checklength(body[i].productHasSizes[j].products_has_sizes, 'thumbUrl');
          checklength(body[i].productHasSizes[j].products_has_sizes, 'siliconImage');
        }
        done();
      })
    });
  });
