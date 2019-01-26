/*jshint esversion: 6 */

const appinstall = require('./appinstall');
const infoprompt = require('./infoprompt');

async function getAndGenerate(args, quickinstall, site, dounzip) {
    const defaultAppDetails = {
        capabilities: 'bpm',
        packagename: 'com.company',
        name: 'business-application',
        version: '',
        options: ['kjar', 'model', 'service']
    };

    var appDetails = {};
    if (quickinstall) {
        appDetails = defaultAppDetails;
        // if quickstart check of individual params
        // and overwrite defaults
        if (args.capabilities) {
            appDetails.capabilities = args.capabilities;
        }
        if (args.packagename) {
            appDetails.packagename = args.packagename;
        }
        if (args.name) {
            appDetails.name = args.name;
        }
        if (args.version) {
            appDetails.version = args.version;
        }
        if (args.options) {
            appDetails.options = args.options.split(',');
        }
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

module.exports.getAndGenerate = getAndGenerate;