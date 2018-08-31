var expect = require('chai').expect;
var request = require('request');
var https = require('https');
var env = require('./environment');
var login = require('./login');
var token;
var key = "0000-00000-00000-0000";


describe('login', function() {
this.timeout(5000);
it('logged in successfully', function(done) {
  var subPath = "/login";
  var inputvalues = login.input(key, subPath);
  request.post(inputvalues, function(err, res, body) {
    body = JSON.parse(body);
    expect(res.statusCode).to.equal(200);
    token = body.accessToken;
    //console.log(token);
    done();
  })
});

var postdata={
        product: {
          startDateTime: '2017-11-04 01:20:32',
          endDateTime: '2017-11-06 10:20:32',
          name: 'name-hk-test',
          description: 'description',
          subtitle: 'subtitle name',
          categoryId: ['38', '39'],
          attributes: {
            16: 'n1',
            17: 'n4',
            18: 'n6'
          },
          ingredients: '26,25',
          consumerIngredients: 'This is a big text box with all consumer Ingredients. User to copy paste this data from his docs.',
          professionalApplication: [{
            step: 'step',
            optional_text: 'this is step 1',
            priority: '1'
          }, {
           step: 'optional',
            optional_text: 'this is optional 1',
            priority: '2'
          }, {
            step: 'step',
            optional_text: 'this is optional 3',
            priority: '3'
          }],
          sizes: [{
            id: '16',
            barcode: 'barcode-value',
            imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABSlBMVEUAAAAAqtUAvNUAv9UAvNYAvtUAvNUAu9UAvNUAvNUAudEAvNUAvNUAttsAvNUAvNUAgP8AvNQAvNUAvtgAvNYAvNUAvNUA//8Aw9IAv9UAu9YAu9YAvNQAvNUAvNUAvNUAvNUAvNMAvdUAvdYAu9QAvNUAu9YAvdUAvNUAvNYAu9QAvNUAvdUAvNYAu9YAu9UAvdUAvNUAv9EAvNUAvdUAutUAu9UAvNUAvNUAv9cAvNUAvtUAvNUAvNUAttsAvNUAvNUAvNYAvNUAvNUAs8wAu9MAvdUAvdQAvdUAvNUAvNUAvNUAudEAvNUAvdUAutUAvNUAvtYAvNUAuNYAvNUAzMwAvNUAvNUAvdkAvNUAvNcAxNgAvNUAvNUAu9UAvNUAvNUAutMAvNQAvNUAutYAvNUAvNQAvdMAvdUAvtcAu9cAvNUAvNUAAAAljw49AAAAbHRSTlMABpkYxTflYvicFo32FYr1AjX0J2qu7wERJDhLX3OGo+NMYGRlZ2lsbm9xcnR2ddvTZhzSVUMx+vwg+U5b8A774ViwvQpSf03quMrGC/GWMMlKqhmYBcLeG9UTDbp5eN3aNJWRJf6nI7wzLcy15YmSAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+EFCw4HMG0r4ZcAAAI5SURBVFjDpddnVxpBFIfxa8EOomKNYll7SyQKmBixFwQL9h5JTIze7/86C5yT3NmZuzM7/l8u+/wOe4AFAHxXVV1dBe9YTS1ibY19H6pDd3Uh276+ActrqLd7+o34b43BL6OpuQXJWpqbAuXhSCt61hoJm9bRtkg7KtYeaYvq645YZxey6+qMdSiz7p7evg/9A/HBIdRuaDA+0D/c19vTTYARfSdvhL7iNgB9dzg2gEOAURtglABjNsAYAcZtgHECxGyAGAEmbIAJAkzaAJMEmLIBpggwbQNME2DGBpghwKwNMEuAORtgjgDzupM/fpKPzRNgQdcnwp+lgwsEWNT17m1SEhYJsKTtFcISAZJylUqLPcCw54wkAZal/svXlbTYh755TlkmwKrcA1QEtsdVelvOyH1F4PuMcF9fEx9crxxdSfM9rgnAhvjg5lbl8Dbf44YA7KBa4HvcEYBd9BGUPe4KQAJ5Qd1jQgBgjxWYfk/sYR8Zgelx3wPEUS1wPcY9QBKVAtsLn4TysqqzDtg+6+2DfkE7EpDLB+nzOQmAwyDAodzDURDgSAHAsXl/rOrhxBw4UQJQMO0L6h5ODV+I/CkDmL4XHGB3ZtKf8T2cX+j7i3MfAMKXuv5S86v/6tq/v74CzW6yfn32RtcD3N7x/d2tvnf/sdxn1HnqIWrSuws9qvrvT4Z56TKK0pNI/ciZ9+5+Fp5p/vzrd6C8tKeX//3Ln8B5aa/F8qcrX3y1ykvLOW9vjv+1/wUv7eLP0YudfgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNS0xMVQxNDowNzo0OCswMjowMKoirmgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDUtMTFUMTQ6MDc6NDgrMDI6MDDbfxbUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==',
            thumbUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABSlBMVEUAAAAAqtUAvNUAv9UAvNYAvtUAvNUAu9UAvNUAvNUAudEAvNUAvNUAttsAvNUAvNUAgP8AvNQAvNUAvtgAvNYAvNUAvNUA//8Aw9IAv9UAu9YAu9YAvNQAvNUAvNUAvNUAvNUAvNMAvdUAvdYAu9QAvNUAu9YAvdUAvNUAvNYAu9QAvNUAvdUAvNYAu9YAu9UAvdUAvNUAv9EAvNUAvdUAutUAu9UAvNUAvNUAv9cAvNUAvtUAvNUAvNUAttsAvNUAvNUAvNYAvNUAvNUAs8wAu9MAvdUAvdQAvdUAvNUAvNUAvNUAudEAvNUAvdUAutUAvNUAvtYAvNUAuNYAvNUAzMwAvNUAvNUAvdkAvNUAvNcAxNgAvNUAvNUAu9UAvNUAvNUAutMAvNQAvNUAutYAvNUAvNQAvdMAvdUAvtcAu9cAvNUAvNUAAAAljw49AAAAbHRSTlMABpkYxTflYvicFo32FYr1AjX0J2qu7wERJDhLX3OGo+NMYGRlZ2lsbm9xcnR2ddvTZhzSVUMx+vwg+U5b8A774ViwvQpSf03quMrGC/GWMMlKqhmYBcLeG9UTDbp5eN3aNJWRJf6nI7wzLcy15YmSAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+EFCw4HMG0r4ZcAAAI5SURBVFjDpddnVxpBFIfxa8EOomKNYll7SyQKmBixFwQL9h5JTIze7/86C5yT3NmZuzM7/l8u+/wOe4AFAHxXVV1dBe9YTS1ibY19H6pDd3Uh276+ActrqLd7+o34b43BL6OpuQXJWpqbAuXhSCt61hoJm9bRtkg7KtYeaYvq645YZxey6+qMdSiz7p7evg/9A/HBIdRuaDA+0D/c19vTTYARfSdvhL7iNgB9dzg2gEOAURtglABjNsAYAcZtgHECxGyAGAEmbIAJAkzaAJMEmLIBpggwbQNME2DGBpghwKwNMEuAORtgjgDzupM/fpKPzRNgQdcnwp+lgwsEWNT17m1SEhYJsKTtFcISAZJylUqLPcCw54wkAZal/svXlbTYh755TlkmwKrcA1QEtsdVelvOyH1F4PuMcF9fEx9crxxdSfM9rgnAhvjg5lbl8Dbf44YA7KBa4HvcEYBd9BGUPe4KQAJ5Qd1jQgBgjxWYfk/sYR8Zgelx3wPEUS1wPcY9QBKVAtsLn4TysqqzDtg+6+2DfkE7EpDLB+nzOQmAwyDAodzDURDgSAHAsXl/rOrhxBw4UQJQMO0L6h5ODV+I/CkDmL4XHGB3ZtKf8T2cX+j7i3MfAMKXuv5S86v/6tq/v74CzW6yfn32RtcD3N7x/d2tvnf/sdxn1HnqIWrSuws9qvrvT4Z56TKK0pNI/ciZ9+5+Fp5p/vzrd6C8tKeX//3Ln8B5aa/F8qcrX3y1ykvLOW9vjv+1/wUv7eLP0YudfgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNS0xMVQxNDowNzo0OCswMjowMKoirmgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDUtMTFUMTQ6MDc6NDgrMDI6MDDbfxbUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=='
          }],
          imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABSlBMVEUAAAAAqtUAvNUAv9UAvNYAvtUAvNUAu9UAvNUAvNUAudEAvNUAvNUAttsAvNUAvNUAgP8AvNQAvNUAvtgAvNYAvNUAvNUA//8Aw9IAv9UAu9YAu9YAvNQAvNUAvNUAvNUAvNUAvNMAvdUAvdYAu9QAvNUAu9YAvdUAvNUAvNYAu9QAvNUAvdUAvNYAu9YAu9UAvdUAvNUAv9EAvNUAvdUAutUAu9UAvNUAvNUAv9cAvNUAvtUAvNUAvNUAttsAvNUAvNUAvNYAvNUAvNUAs8wAu9MAvdUAvdQAvdUAvNUAvNUAvNUAudEAvNUAvdUAutUAvNUAvtYAvNUAuNYAvNUAzMwAvNUAvNUAvdkAvNUAvNcAxNgAvNUAvNUAu9UAvNUAvNUAutMAvNQAvNUAutYAvNUAvNQAvdMAvdUAvtcAu9cAvNUAvNUAAAAljw49AAAAbHRSTlMABpkYxTflYvicFo32FYr1AjX0J2qu7wERJDhLX3OGo+NMYGRlZ2lsbm9xcnR2ddvTZhzSVUMx+vwg+U5b8A774ViwvQpSf03quMrGC/GWMMlKqhmYBcLeG9UTDbp5eN3aNJWRJf6nI7wzLcy15YmSAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+EFCw4HMG0r4ZcAAAI5SURBVFjDpddnVxpBFIfxa8EOomKNYll7SyQKmBixFwQL9h5JTIze7/86C5yT3NmZuzM7/l8u+/wOe4AFAHxXVV1dBe9YTS1ibY19H6pDd3Uh276+ActrqLd7+o34b43BL6OpuQXJWpqbAuXhSCt61hoJm9bRtkg7KtYeaYvq645YZxey6+qMdSiz7p7evg/9A/HBIdRuaDA+0D/c19vTTYARfSdvhL7iNgB9dzg2gEOAURtglABjNsAYAcZtgHECxGyAGAEmbIAJAkzaAJMEmLIBpggwbQNME2DGBpghwKwNMEuAORtgjgDzupM/fpKPzRNgQdcnwp+lgwsEWNT17m1SEhYJsKTtFcISAZJylUqLPcCw54wkAZal/svXlbTYh755TlkmwKrcA1QEtsdVelvOyH1F4PuMcF9fEx9crxxdSfM9rgnAhvjg5lbl8Dbf44YA7KBa4HvcEYBd9BGUPe4KQAJ5Qd1jQgBgjxWYfk/sYR8Zgelx3wPEUS1wPcY9QBKVAtsLn4TysqqzDtg+6+2DfkE7EpDLB+nzOQmAwyDAodzDURDgSAHAsXl/rOrhxBw4UQJQMO0L6h5ODV+I/CkDmL4XHGB3ZtKf8T2cX+j7i3MfAMKXuv5S86v/6tq/v74CzW6yfn32RtcD3N7x/d2tvnf/sdxn1HnqIWrSuws9qvrvT4Z56TKK0pNI/ciZ9+5+Fp5p/vzrd6C8tKeX//3Ln8B5aa/F8qcrX3y1ykvLOW9vjv+1/wUv7eLP0YudfgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNS0xMVQxNDowNzo0OCswMjowMKoirmgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDUtMTFUMTQ6MDc6NDgrMDI6MDDbfxbUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=='
        }
};

it('Product in successfully', function(done) {
  var options = {
    body:postdata,
    json:true,
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + '/products',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
      'API-KEY': key
    }
  };
  request.post(options, function(err, res, body) {
    console.log(res.statusCode);
  //  console.log(body);
    body=JSON.stringify(body);
    body=JSON.parse(body)
    console.log(body);
    expect(res.statusCode).to.equal(200);
    expect(body.name).to.equal("HELLO");
    done();
  })
});
});
