var expect = require('chai').expect;
var request = require('request');
var https = require('https');
var env = require('./environment');
var token;

var input = function(key, subPath) {
  var options = {
    form : {
      email: "mittapalli.rahul@gmail.com",
      password: "12345678"
    },
    "rejectUnauthorized": false,
    url: env.hostname + env.APIver + subPath,
    headers: {
      'API-KEY': key,
      'Content-Type': "application/x-www-form-urlencoded"
    }
  };
return options;
};
module.exports = {
  input: input
}
