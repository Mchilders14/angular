/*
    Visual Studio Code terminal and execute command 'tsc' to transpile .ts -> .js; 'tsc -w' will watch for saved changed.
    Visual Studio Code terminal and execute command 'node js/customer.js' to execute .js file in terminal.
    Must download node.js, npm and typescript. Run 'npm init' to get package.json in project folder 
    Execute Command 'npm install -g typescript' this will install the latest version.
    Execute 'tsc --init' for config file.
    Execute 'npm install -g @angular/cli' to install angular
    Execute 'node -v' to find your current version of node.js
    Execute 'npm cache clean -f' to clear cache and then execute 'npm install -g n'; (n) - is another useful Node version manager
    Execute 'sudo n stable' to install latest stable version or 'sudo n latest' for latest verson or 'n <Version.Number>' for specific
    Using Homebrew to update to specific version 'brew switch node <version>'
*/

let tsname: string = "TypeScript";
let hw: string = "Hello World";
let myName: string = "Matt"

const log = (tsname: string): void => {
    console.log("Hello world from", tsname)
}

log(tsname);