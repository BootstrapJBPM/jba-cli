#!/usr/bin/env node

/*jshint esversion: 6 */

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const minimist = require('minimist');
const usage = require('./lib/usage');
const gen = require('./lib/getandinstall');

const allCommands = ['gen'];

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

const args = minimist(process.argv.slice(2))

if (args._.length != 1) {
    console.log(usage.showUsage());
} else {
    const cmd = args._[0];
    if (args.site) {
        site = args.site;
    }
    if (args.unzip) {
        dounzip = true;
    }
    if (args.quick) {
        quickinstall = true;
    }
    if (allCommands.indexOf(cmd) < 0) {
        console.log(usage.showUsage());
    } else {
        gen.getAndGenerate(args, quickinstall, site, dounzip);
    }

}