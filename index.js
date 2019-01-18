#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const minimist = require('minimist');
const infoprompt = require('./lib/infoprompt')
const usage = require('./lib/usage');
const appinstall = require('./lib/appinstall');

const allCommands = ['gen'];
var site = 'https://start.jbpm.org/gen';
var dounzip = false;

clear();
console.log(
    chalk.yellow(
        figlet.textSync('JBA CLI', {
            horizontalLayout: 'full'
        })
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

    if (haveKJar && haveDKJar) {
        appdetails.options.shift();
    }

    appinstall.getAndGenerate(site, dounzip, appdetails);
}

const args = minimist(process.argv.slice(2))

if (args._.length != 1) {
    console.log(usage.showUsage());
} else {
    const cmd = args._[0];
    if (args.site) {
        console.log('** Setting gen site to: ' + args.site);
        site = args.site;
    }
    if(args.unzip) {
        dounzip = true;
    }
    if (allCommands.indexOf(cmd) < 0) {
        console.log(usage.showUsage());
    } else {
        genAndInstall();
    }

}