var pkg = require('../package.json');
var Configstore = require('configstore');
var conf = new Configstore(pkg.name);

exports.setConfig = function(yargs){
  // check for config options and set
  if (yargs.outputFolder){
    conf.set('outputFolder', yargs.outputFolder)
  }
  // etc
}

exports.getConfig = function(){
  var config = conf.all
  return config;
}
