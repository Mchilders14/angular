/*
    Visual Studio Code terminal and execute command 'tsc' to transpile .ts -> .js; 'tsc -w' will watch for saved changed.
    Visual Studio Code terminal and execute command 'node js/customer.js' to execute .js file in terminal.
    Must download node.js, npm and typescript. Run 'npm init' to get package.json in project folder 
    Execute Command 'npm install -g typescript' this will install the latest version.
    Execute tsc --init for config file.
*/
let tsname: string = "TypeScript";
let hw: string = "Hello World";
let myName: string = "Matt"

const log = (tsname: string): void => {
    console.log("Hello world from", tsname)
}

log(tsname);