global.__basedir = __dirname;

var chalk = require('chalk');
require('dotenv').config();

// require your tool and call it in the main function
var processClip = require('./tools/process-clip');

module.exports = async function(input){
  console.log("this index file is going to do its thing on this input:\n");
  console.log(JSON.stringify(input));
  var result = await processClip(input);
  console.log("\ngot at result, and it's:\n");
  console.log(chalk.blue(JSON.stringify(result)) + "\n");
}
