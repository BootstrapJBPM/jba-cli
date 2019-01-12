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
var site = 'http://start.jbpm.org/gen';

clear();
console.log(
        chalk.yellow(
                figlet.textSync('JBA CLI', {horizontalLayout: 'full'})
        )
);

const genAndInstall = async () => {
    const appdetails = await infoprompt.askAppCredentials();

    var haveKJar = false;
    var haveDKJar = false;
    if (appdetails.options.some(e => e === 'kjar')) {
        haveKJar = true;
    }
    if (appdetails.options.some(e => e === 'dkjar')) {
        haveDKJar = true;
    }

    if(haveKJar && haveDKJar) {
        appdetails.options.shift();
    }

    appinstall.getAndGenerate(site, appdetails);
}

const args = minimist(process.argv.slice(2))

if(args._.length != 1) {
    console.log(usage.showUsage());
} else {
    const cmd = args._[0];
    if(args.site) {
        console.log('** Setting gen site to: ' + args.site);
        site = args.site;
    }
    if (allCommands.indexOf(cmd) < 0) {
        console.log(usage.showUsage());
    } else {
        genAndInstall();
    }

}