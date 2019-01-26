/*jshint esversion: 6 */

const request = require('request');
const fs = require('fs');
const afterinstall = require('./afterinstall');
const admZip = require('adm-zip');
const systempath = require('path');

var self = module.exports = {
    getAndGenerate: (appurl, dounzip, appdetails, path) => {
        console.log('\nGenerating your jBPM Business App ZIP using ' + appurl + '....');

        if (!path) {
            path = process.cwd() + systempath.sep;
        } else {
            path += systempath.sep;
        }

        console.log("Using provided path: " + path);

        request({
                    url: appurl,
                    method: "POST",
                    body: JSON.stringify(appdetails),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    rejectUnauthorized: false
                },
                function (error, response, body) {
                    if (error != null) {
                        console.log("Error performing request:" + error);
                    }
                }
            ).pipe(fs.createWriteStream(path + appdetails.name + '.zip'))
            .on('finish', function () {
                console.log('done');
                if (dounzip) {
                    console.log('\nUnzipping your jBPM Business App.....');
                    self.doTheUnzip(path + appdetails.name + '.zip', path);
                    console.log('done');
                }

                console.log(afterinstall.afterUsage());
            });
    },
    doTheUnzip: (zipfile, path) => {
        var zip = new admZip(zipfile);
        zip.extractAllTo(path, true);
    }
};