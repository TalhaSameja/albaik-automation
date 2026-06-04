const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const isWeb = process.env.TEST_PLATFORM === 'web';
const browserName = process.env.BROWSER || (isWeb ? 'chrome' : 'appium');
const envName = process.env.ENV || 'QA';
const platformName = process.env.TEST_PLATFORM || 'mobile';

const outputDir = './cucumber-html-reports';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const options = {
    theme: 'bootstrap',
    jsonDir: './cucumber-json-reports/',
    output: './cucumber-html-reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    name: 'Albaik Mobile Automation',
    metadata: {
        "Project": "Albaik Mobile Automation",
        "Test Environment": envName.toUpperCase(),
        "Platform": platformName,
        "Browser": browserName,
        "Execution Time": new Date().toLocaleString()
    },
    failedSummaryReport: true,
    customStyle: './scripts/custom-style.css',
};

try {
    reporter.generate(options);
    console.log("Classic Cucumber HTML Report generated successfully.");
} catch (error) {
    console.error("Error generating Cucumber report:", error);
}
