/*jshint esversion: 6 */

const request = require('request');
const fs = require('fs');
const afterinstall = require('./afterinstall');
const admZip = require('adm-zip');

var self = module.exports = {
    getAndGenerate: (appurl, dounzip, appdetails) => {
        console.log('\nGenerating your jBPM Business App ZIP using ' + appurl + '....');

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
            ).pipe(fs.createWriteStream(appdetails.name + '.zip'))
            .on('finish', function () {
                console.log('done');
                if (dounzip) {
                    console.log('\nUnzipping your jBPM Business App.....');
                    self.doTheUnzip(appdetails.name + '.zip');
                    console.log('done');
                }

                console.log(afterinstall.afterUsage());
            });
    },
    doTheUnzip: (zipfile) => {
        var zip = new admZip(zipfile);
        zip.extractAllTo(process.cwd(), true);
    }
};