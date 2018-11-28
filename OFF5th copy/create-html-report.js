var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    name: 'tests/reports/cucumber.json',
    jsonFile: 'tests/reports/cucumber.json',
    output: 'tests/reports/index.html',
    reportSuiteAsScenarios: true,
    launchReport: false
};

reporter.generate(options);