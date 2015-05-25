var express = require('express');
var sparkService = require ('./spark_service');
var _ = require('underscore');
var auth = require('basic-auth')

var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/devices.json', function (req, res) {
  sparkService.listDevices()
  .then(function(devices) {
      response = _.map(devices, function(device) {
      return device.attributes;
    });
    res.json(response);
  });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
