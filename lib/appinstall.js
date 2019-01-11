const request = require('request');
const fs = require('fs');
const path = require('path');
var Spinner = require('cli-spinner').Spinner;

module.exports = {
            getAndGenerate: (appurl, appdetails) => {
                var spinner = new Spinner('Generating your jBPM Business App ZIP.. %s');
                spinner.setSpinnerString('|/-\\');
                spinner.start();

                request({
                    url: appurl,
                    method: "POST",
                    body: JSON.stringify(appdetails),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept' : 'application/octet-stream'
                    }
                }).pipe(fs.createWriteStream(appdetails.name + '.zip'));

                spinner.stop();

                console.log('\n\nSuccessfully generated your ' + appdetails.name + '.zip');
                console.log('Unzip it to your desired destination.');
            }
};