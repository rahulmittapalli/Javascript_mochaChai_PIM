var expect = require('chai').expect;
var https = require("https");
var request = require('request');
var env = require('./environment');


function inputvalues()
{
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
function implement(body,count)
{
for (var i = 0; i < count; i++) {
var bodyKeys=['name','subtitle','description','imageUrl','thumbUrl','consumerIngredients','ingredients','url'];
var idkeys=['id'];
var arraylist=['productHasCategory','productHasAttributes','productHasSizes','productHasIngredients','productHasProfessionalApplication','topRecommendedProduct'];
var unknown=['startDateTime','endDateTime','createdAt','updatedAt'];
bodyKeys.every((prop)=>{
  expect(body[i]).to.have.own.property(prop);
if(prop==='[bodykeys]')
{
  expect(body[i][prop]).to.be.a('string');
}
else if (prop==='[arraylist]') {
  expect(body[i][prop]).to.be.an('array');
}
else {
//expect(body[i][prop]).to.be.a('number');
}
})
}
}

describe("Dermalogica", function() {
  this.timeout(35000);
  it("This should check for ALL Open products", function(done) {
    var count;
    var inputvalue=inputvalues();
    console.log(inputvalue);
    request.get(inputvalue, function(err, res, body) {
      body = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      var count = body.length;
      implement(body,count)
      for (var i = 0; i < count; i++) {
        for(var j=0;j<body[i].productHasCategory.length;j++)
        {
          expect(body[i].productHasCategory[j]).to.have.own.property('name');
        }
        for(var j=0;j<body[i].productHasAttributes.length;j++)
        {
          expect(body[i].productHasAttributes[j]).to.have.own.property('name');
        }
        // for(var j=0;j<body[i].productHasSizes.length;j++)
        // {
        //   expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('imageUrl');
        //   expect(body[i].productHasSizes[j].products_has_sizes.imageUrl).to.be.a('string');
        //   console.log(body[i].productHasSizes[j].products_has_sizes.imageUrl.length);
        //   expect(body[i].productHasSizes[j].products_has_sizes.imageUrl.length).to.be.above(1)
        //   expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('thumbUrl');
        //   console.log(body[i].productHasSizes[j].products_has_sizes.thumbUrl.length);
        //   expect(body[i].productHasSizes[j].products_has_sizes.thumbUrl.length).to.be.above(1)
        //   expect(body[i].productHasSizes[j].products_has_sizes).to.have.own.property('siliconImage');
        //   console.log(body[i].productHasSizes[j].products_has_sizes.siliconImage.length);
        // }
        for(var j=0;j<body[i].productHasIngredients.length;j++)
        {
          expect(body[i].productHasIngredients[j]).to.have.own.property('name');
        }
         for(var j=0;j<body[i].topRecommendedProduct.length;j++)
         {
           expect(body[i].topRecommendedProduct[j]).to.have.own.property('product_id');
         }
      }
      setTimeout(done, 25000);
    })
  });
});
