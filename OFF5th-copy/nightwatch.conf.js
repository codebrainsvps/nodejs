require('nightwatch-cucumber')({
    nightwatchClientAsParameter: true,
    cucumberArgs: [
      '--require', 'tests/features/step_definitions',
      '--format', 'progress',
      '--format', 'json:tests/reports/cucumber.json',
      '--format-options', '{"colorsEnabled": true}',
      'tests/features'
    ]
  });

var seleniumServer = require('selenium-server')
const chromedriverPath = require('chromedriver').path;


module.exports = {
    // Loads nightwatch-cucumber configuration into main nightwatch.js conf
    output_folder: 'tests/reports',
    globals_path : 'tests/data/globals.js',
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: 'tests/page_objects',
    live_output: false,
    disable_colors: false,


    // Sets configuration for Selenium Server
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        start_session: true,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': chromedriverPath
        }
    },


    // Sets config options for different testing environments defined by the user
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            silent: true,
            desiredCapabilities: {
                browserName: 'chrome',
                "chromeOptions" : {
                    "args" : ["-incognito"]
                    },
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            'screenshots': {
                enabled: true,
                on_error: true,
                on_failure: true,
                path: './screenshots'
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}