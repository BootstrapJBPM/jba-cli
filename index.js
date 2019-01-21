#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const minimist = require('minimist');
const infoprompt = require('./lib/infoprompt')
const usage = require('./lib/usage');
const appinstall = require('./lib/appinstall');

const allCommands = ['gen'];
const defaultAppDetails = { 
    capabilities: 'bpm',
    packagename: 'com.company',
    name: 'business-application',
    version: '',
    options: [ 'kjar', 'model', 'service' ] 
}

var site = 'https://start.jbpm.org/gen';
var dounzip = false;
var quickinstall = false;


clear();
console.log(
    chalk.yellow(
        figlet.textSync('JBA CLI', {
            horizontalLayout: 'full'
        })
    )
);

const genAndInstall = async () => {
    var appDetails = {};
    if(quickinstall) {
        appDetails = defaultAppDetails;
    } else {
        appDetails = await infoprompt.askAppCredentials();
    }

    var haveKJar = false;
    var haveDKJar = false;
    if (appDetails.options.some(e => e === 'kjar')) {
        haveKJar = true;
    }
    if (appDetails.options.some(e => e === 'dkjar')) {
        haveDKJar = true;
    }

    if (haveKJar && haveDKJar) {
        appDetails.options.shift();
    }

    appinstall.getAndGenerate(site, dounzip, appDetails);
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
    if(args.quick) {
        quickinstall = true;
    }
    if (allCommands.indexOf(cmd) < 0) {
        console.log(usage.showUsage());
    } else {
        genAndInstall();
    }

}