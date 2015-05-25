var spark   = require('spark');
var Promise = require('bluebird');

spark.login({accessToken: 'XX'});

var listDevices = function() {
  return spark.listDevices()
}

module.exports = {
  listDevices: listDevices
};
