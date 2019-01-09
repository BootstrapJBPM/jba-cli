#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const infoprompt = require('./lib/infoprompt')
const files = require('./lib/files');

clear();
console.log(
        chalk.yellow(
                figlet.textSync('JBA CLI', {horizontalLayout: 'full'})
        )
);

const run = async () => {
    const credentials = await infoprompt.askAppCredentials();
    console.log(credentials);
}

run();