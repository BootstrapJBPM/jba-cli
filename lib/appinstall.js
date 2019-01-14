const request = require('request');
const fs = require('fs');
const path = require('path');
const afterinstall = require('./afterinstall');

module.exports = {
            getAndGenerate: (appurl, appdetails) => {
                console.log('\nGenerating your jBPM Business App ZIP using ' + appurl + '....' );
                var requestError = false;

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
                    if(error != null) {
                        console.log("Error performing request:" + error);
                        requestError = true;
                    }
                }
                ).pipe(fs.createWriteStream(appdetails.name + '.zip'));

                if(!requestError) {
                    console.log('done');
                    console.log(afterinstall.afterUsage());
                }

            }
};