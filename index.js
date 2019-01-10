#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const minimist = require('minimist');

const infoprompt = require('./lib/infoprompt')
const files = require('./lib/files');
const usage = require('./lib/usage');
const appinstall = require('./lib/appinstall');

const allCommands = ['gen'];

clear();
console.log(
        chalk.yellow(
                figlet.textSync('JBA CLI', {horizontalLayout: 'full'})
        )
);

const genAndInstall = async () => {
    const appdetails = await infoprompt.askAppCredentials();
    appinstall.getAndGenerate('http://localhost:8090/gen', appdetails);
}

const args = minimist(process.argv.slice(2))


if(args._.length != 1) {
    console.log(usage.showUsage());
} else {
    const cmd = args._[0]
    if (allCommands.indexOf(cmd) < 0) {
        console.log(usage.showUsage());
    } else {
        genAndInstall();
    }

}