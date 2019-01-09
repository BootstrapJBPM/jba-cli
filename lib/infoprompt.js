const inquirer    = require('inquirer');

module.exports = {

            askAppCredentials: () => {
            const questions = [
                {
                    name: 'apptype',
                    type: 'list',
                    message: 'Enter Application Type:',
                    default: 'BA',
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
                    default: ['BA', 'DM', 'SE'],
                    choices: [
                        {
                            name: 'Business Assets',
                            value: 'BA'
                        },
                        {
                            name: 'Dynamic Assets',
                            value: 'DA'
                        },
                        {
                            name: 'Data Model',
                            value: 'DM'
                        },
                        {
                            name: 'Service',
                            value: 'SE'
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
