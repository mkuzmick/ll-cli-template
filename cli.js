#!/usr/bin/env node

// bring in all the tools needed for text display
var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');

// store any arguments passed in using yargs
var yargs = require('yargs').argv;

// bring in tool to handle config options
var configurator = require('./tools/configurator');

// bring in your actual tool
var myTool = require('./index.js');

// **********************************************

// clear the screen
clear();

// print out the name of the tool
console.log(figlet.textSync('test this'));

// log the arguments that have been passed in
console.log("\nlaunching testthis with yargs . . .\n\n");
console.log(chalk.magenta(JSON.stringify(yargs, null, 4) + "\n\n"));

// if there's a config flag, set config options else get settings and run tool
if (yargs.config) {
  configurator.setConfig(yargs);
} else {
  yargs.settings = { ...configurator.getConfig() };
  myTool(yargs);
}
