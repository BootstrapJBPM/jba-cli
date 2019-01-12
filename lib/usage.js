const commandLineUsage = require('command-line-usage');

module.exports = {

            showUsage: () => {
                const sections = [
                    {
                        header: 'jBPM Business Applications CLI',
                        content: 'CLI to generate jBPM Business Applications. For more information see jbpm.org. To generate a jBPM Business Application online use start.jbpm.org'
                    },
                    {
                        header: 'Usage',
                        content: 'Go to a directory where your zip should be created, then run the gen command as described below.'
                    },
                    {
                        header: 'Synopsis',
                        content: '$ jba <command> <options>'
                    },
                    {
                        header: 'Command List',
                        content: [
                            {name: 'gen', summary: 'Generate a new jBPM Business Application'}
                        ]
                    },
                    {
                        header: 'Options',
                        optionList: [
                            {
                                name: 'site',
                                description: 'Site to generate from (optional), \nexample: jba gen --site=http://my.site.com/gen.\nDefault is http://start.jbpm.org/gen'
                            }
                        ]
                    }
                ];
                const usage = commandLineUsage(sections);
                return usage;
            }
};