const commandLineUsage = require('command-line-usage');

module.exports = {

            showUsage: () => {
                const sections = [
                    {
                        header: 'jBPM Business Applications CLI',
                        content: 'CLI to generate jBPM Business Applications. For more information see jbpm.org. To generate a jBPM Business Application online use start.jbpm.org'
                    },
                    {
                        header: 'Synopsis',
                        content: '$ jba <command>'
                    },
                    {
                        header: 'Command List',
                        content: [
                            {name: 'gen', summary: 'Generate a new jBPM Business Application'}
                        ]
                    }
                ];
                const usage = commandLineUsage(sections);
                return usage;
            }
};