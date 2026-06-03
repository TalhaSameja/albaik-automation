

import { config as dotenvConfig } from 'dotenv';

import { execSync } from 'child_process';

import fs from 'fs';

import path from 'path';

import AllureReporter from '@wdio/allure-reporter';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

import { getCapabilities } from './config/capabilities';



dotenvConfig();



process.env.ANDROID_SDK_ROOT = process.env.ANDROID_SDK_ROOT || process.env.ANDROID_HOME;



const TEST_PLATFORM = process.env.TEST_PLATFORM?.toLowerCase() || 'mobile';
const isCrossPlatform = TEST_PLATFORM === 'cross-platform';
const isDualMobile = TEST_PLATFORM === 'dual-mobile';
const isFullDelivery = TEST_PLATFORM === 'full-delivery';
const isWeb = TEST_PLATFORM === 'web';

const testSpecs = (isDualMobile || isFullDelivery)
  ? ['./src/features/cross-platform/**/*.feature']
  : isCrossPlatform
  ? ['./src/features/cross-platform/**/*.feature', './src/features/web/**/*.feature', './src/features/mobile/**/*.feature']
  : isWeb
  ? ['./src/features/web/**/*.feature', './src/features/cross-platform/**/*.feature']
  : ['./src/features/mobile/**/*.feature'];

const stepDefinitionFiles = (isDualMobile || isFullDelivery)
  ? [
      './src/step_definitions/Common/Common_StepDef_Mob.ts',
      './src/step_definitions/Common/Common_StepDef_web.ts',
      './src/step_definitions/mobile/*.ts',
      './src/step_definitions/web/*.ts',
      './src/step_definitions/cross-platform/**/*.ts',
    ]
  : isCrossPlatform
  ? [
      './src/step_definitions/Common/Common_StepDef_Mob.ts',
      './src/step_definitions/Common/Common_StepDef_web.ts',
      './src/step_definitions/mobile/*.ts',
      './src/step_definitions/web/*.ts',
      './src/step_definitions/cross-platform/**/*.ts',
    ]
  : isWeb
  ? [
      './src/step_definitions/Common/Common_StepDef_web.ts',
      './src/step_definitions/web/**/*.ts',
      './src/step_definitions/cross-platform/**/*.ts',
    ]
  : ['./src/step_definitions/mobile/SettingsSteps.ts', './src/step_definitions/mobile/AlbaikHomeSteps.ts'];



function resolveAppiumPath(): string {
  const isWindows = process.platform === 'win32';
  try {
    const cmd = isWindows ? 'where.exe appium' : 'which appium';
    const result = execSync(cmd, { encoding: 'utf8' });

    return result.trim().split(/\r?\n/)[0].trim();

  } catch {

    const prefix = execSync('npm config get prefix', { encoding: 'utf8' }).trim();

    return isWindows ? path.join(prefix, 'appium.cmd') : path.join(prefix, 'bin', 'appium');

  }

}



export const config: WebdriverIO.Config = {

  runner: 'local',



  specs: testSpecs,

  suites: {
    carPickup: ['./src/features/cross-platform/CarPickup.feature'],
    pickup: ['./src/features/cross-platform/Pickup.feature'],
    delivery: ['./src/features/cross-platform/Delivery.feature'],
    scanToOrder: ['./src/features/cross-platform/ScanToOrder.feature'],
  },



   exclude: [
    './src/features/web/ExampleWeb.feature',
    './src/features/mobile/ExampleSettings.feature'
  ],



 maxInstances: (isCrossPlatform || isDualMobile) ? 2 : 1,



  capabilities: (isFullDelivery

    ? {

        customerApp: {

          capabilities: getCapabilities('customer'),

        },

        web: {

          capabilities: getCapabilities('web'),

        },

        driverApp: {

          capabilities: getCapabilities('driver'),

        },

      }

    : isDualMobile

    ? {

        customerApp: {

          capabilities: getCapabilities('customer'),

        },

        driverApp: {

          capabilities: getCapabilities('driver'),

        },

      }

    : isCrossPlatform

    ? {

        mobile: {

          capabilities: getCapabilities('mobile'),

        },

        web: {

          capabilities: getCapabilities('web'),

        },

      }

    : [getCapabilities(TEST_PLATFORM)]) as any,




  logLevel: 'error',

  onPrepare: function () {
    const allureResultsPath = path.join(process.cwd(), 'allure-results');
    const allureReportPath = path.join(process.cwd(), 'allure-report');
    const cucumberJsonPath = path.join(process.cwd(), 'cucumber-json-reports');
    const cucumberHtmlPath = path.join(process.cwd(), 'cucumber-html-reports');

    if (fs.existsSync(allureResultsPath)) {
      fs.rmSync(allureResultsPath, { recursive: true, force: true });
      console.log('🧹 Cleared old allure-results directory for the latest run.');
    }
    if (fs.existsSync(allureReportPath)) {
      fs.rmSync(allureReportPath, { recursive: true, force: true });
    }
    if (fs.existsSync(cucumberJsonPath)) {
      fs.rmSync(cucumberJsonPath, { recursive: true, force: true });
    }
    if (fs.existsSync(cucumberHtmlPath)) {
      fs.rmSync(cucumberHtmlPath, { recursive: true, force: true });
    }
  },

  onComplete: function () {
    try {
      execSync('npx ts-node scripts/generate-cucumber-report.ts', { stdio: 'inherit' });
      console.log('\n✅ Cucumber HTML report ready → cucumber-html-reports/index.html');
      console.log('   View:  npm run report:cucumber:open\n');
    } catch (e) {
      console.error('Could not generate Cucumber HTML report:', e);
    }
    
    // Note for Allure Backup
    console.log('ℹ️  Allure report auto-generation is disabled (Cucumber is primary).');
    console.log('   To generate Allure manually as a backup, run: npm run allure:report\n');
  },

  bail: 0,

  waitforTimeout: 30000,




  connectionRetryTimeout: 120000,



  connectionRetryCount: 3,



  services: [

    [

      'appium',

      {

        command: resolveAppiumPath(),

        args: {

          relaxedSecurity: true,

          log: './appium.log',

        },

      },

    ],

  ],



  framework: 'cucumber',



  reporters: [

    ['spec', { realtimeReporting: true }],

    [

      'allure',

      {

        outputDir: 'allure-results',

        disableWebdriverStepsReporting: true,

        disableWebdriverScreenshotsReporting: false,

        useCucumberStepReporter: true,

        addConsoleLogs: true,

      },

    ],

    ['cucumberjs-json', {
      jsonFolder: 'cucumber-json-reports',
      language: 'en',
    }],

  ],



  afterStep: async function (step, scenario, result, context) {
    if (!result.passed) {
      try {
        const screenshot = await browser.takeScreenshot();
        if (typeof screenshot === 'string') {
          // Pass the base64 string directly to cucumber JSON
          cucumberJson.attach(screenshot, 'image/png');
        } else if (screenshot && typeof screenshot === 'object') {
          for (const base64Data of Object.values(screenshot)) {
            cucumberJson.attach(base64Data as string, 'image/png');
          }
        }
      } catch (error) {
        console.error('Failed to capture Cucumber screenshot:', error);
      }
    }
  },

  afterScenario: async function (_world, result) {

    if (!result.passed) {

      try {

        const screenshot = await browser.takeScreenshot();

        if (typeof screenshot === 'string') {

          AllureReporter.addAttachment(

            'Screenshot on Failure',

            Buffer.from(screenshot, 'base64'),

            'image/png'

          );

        } else if (screenshot && typeof screenshot === 'object') {

          for (const [browserName, base64Data] of Object.entries(screenshot)) {

            AllureReporter.addAttachment(

              `Screenshot on Failure - ${browserName}`,

              Buffer.from(base64Data as string, 'base64'),

              'image/png'

            );

          }

        }

      } catch (error) {

        console.error('Failed to capture screenshot:', error);

      }

    }

  },



  cucumberOpts: {

    require: stepDefinitionFiles,

    backtrace: false,

    requireModule: [],

    dryRun: false,

    failFast: false,

    snippets: true,

    source: true,

    strict: false,

    tagExpression: '',

    timeout: 120000,

    ignoreUndefinedDefinitions: false,


  },

};
