var process = require('process');
var commandLine = process.argv[2];
const yargs = require('yargs');
console.log(commandLine);

var cmdLine = yargs.argv;
console.log('Yargs ka argv :: ', cmdLine);
