const inquirer    = require('inquirer');

module.exports = {

            askAppCredentials: () => {
            const questions = [
                {
                    name: 'apptype',
                    type: 'checkbox',
                    message: 'Enter Application Type:',
                    choices: [
                        {
                            name: 'Business Automation',
                            value: 'BA'
                        },
                        {
                            name: 'Decision Management',
                            value: 'DM'
                        },
                        {
                            name: 'Business Optimization',
                            value: 'BO'
                        }
                    ],
                    validate: function (value) {
                        if (value.length) {
                            return true;
                        } else {
                            return 'Please enter valid Application Type..';
                        }
                    }
                },
                {
                    name: 'packagename',
                    type: 'input',
                    message: 'Enter Package Name:',
                    default: 'com.company',
                    validate: function (value) {
                        if (value.length) {
                            return true;
                        } else {
                            return 'Please enter package name.';
                        }
                    }
                },
                {
                    name: 'appname',
                    type: 'input',
                    message: 'Enter Application Name:',
                    default: 'business-application',
                    validate: function (value) {
                        if (value.length) {
                            return true;
                        } else {
                            return 'Please enter application name.';
                        }
                    }
                },
                {
                    name: 'appversion',
                    type: 'input',
                    message: 'Enter Version Name:',
                    default: '7.16.0-SNAPSHOT',
                    validate: function (value) {
                        if (value.length) {
                            return true;
                        } else {
                            return 'Please enter application version.';
                        }
                    }
                },
                {
                    name: 'appcomponents',
                    type: 'checkbox',
                    message: 'Enter Application Components:',
                    choices: [
                        {
                            name: 'Business Assets, Data Model, Service',
                            value: 'BDS'
                        },
                        {
                            name: 'Dynamic Business Assets, Data Model, Service',
                            value: 'DBDS'
                        }
                    ],
                    validate: function (value) {
                        if (value.length) {
                            return true;
                        } else {
                            return 'Please enter application components.';
                        }
                    }
                }
            ];
return inquirer.prompt(questions);
}

};
