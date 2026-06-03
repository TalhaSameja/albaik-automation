const report = require('multiple-cucumber-html-reporter');

const isWeb = process.env.TEST_PLATFORM === 'web';
const browserName = process.env.BROWSER || (isWeb ? 'chrome' : 'appium');
const envName = process.env.ENV || 'QA';

report.generate({
    jsonDir: './cucumber-json-reports/',
    reportPath: './cucumber-html-reports/',
    metadata: {
        browser: {
            name: browserName,
            version: 'Latest'
        },
        device: 'Test Device',
        platform: {
            name: isWeb ? 'windows' : 'android',
            version: 'Latest'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Albaik Automation' },
            { label: 'Environment', value: envName.toUpperCase() },
            { label: 'Platform', value: process.env.TEST_PLATFORM || 'mobile' },
            { label: 'Execution Time', value: new Date().toLocaleString() }
        ]
    }
});
