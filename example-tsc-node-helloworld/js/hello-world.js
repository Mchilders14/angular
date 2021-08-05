"use strict";
/*
    Visual Studio Code terminal and execute command 'tsc' to transpile .ts -> .js; 'tsc -w' will watch for saved changed.
    Visual Studio Code terminal and execute command 'node js/customer.js' to execute .js file in terminal.
    Must download node.js, npm and typescript. Run 'npm init' to get package.json in project folder
    Execute Command 'npm install -g typescript' this will install the latest version.
    Execute tsc --init for config file.
*/
var tsname = "TypeScript";
var hw = "Hello World";
var myName = "Matt";
var log = function (tsname) {
    console.log("Hello world from", tsname);
};
log(tsname);
