const reporter = require('cucumber-html-reporter');

const isWeb = process.env.TEST_PLATFORM === 'web';
const browserName = process.env.BROWSER || (isWeb ? 'chrome' : 'appium');
const envName = process.env.ENV || 'QA';
const platformName = process.env.TEST_PLATFORM || 'mobile';

const options = {
    theme: 'bootstrap',
    jsonDir: './cucumber-json-reports/',
    output: './cucumber-html-reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        "Project": "Albaik Automation",
        "Test Environment": envName.toUpperCase(),
        "Platform": platformName,
        "Browser": browserName,
        "Execution Time": new Date().toLocaleString()
    },
    failedSummaryReport: true,
};

try {
    reporter.generate(options);
    console.log("Classic Cucumber HTML Report generated successfully.");
} catch (error) {
    console.error("Error generating Cucumber report:", error);
}
