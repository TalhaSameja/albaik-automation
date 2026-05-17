

import { config as dotenvConfig } from 'dotenv';

import { mobileEnvironments } from '../src/data/mobile/environments';



dotenvConfig();



export function getCapabilities(testPlatform = process.env.TEST_PLATFORM || 'mobile') {

  const platform = testPlatform.toLowerCase();



  if (platform === 'web') {

    const browser = process.env.BROWSER?.toLowerCase() || 'chrome';

    const browserCapabilities = {

      chrome: {

        browserName: 'chrome',

        'goog:chromeOptions': {

          args: [

            '--start-maximized',

            '--disable-dev-shm-usage',

            '--log-level=3',

            '--silent',

            '--disable-logging',

            '--output=/dev/null',

          ],

          excludeSwitches: ['enable-logging'],

        },

      },

      firefox: {

        browserName: 'firefox',

        'moz:firefoxOptions': {

          args: ['--no-sandbox'],

        },

      },

      edge: {

        browserName: 'MicrosoftEdge',

        'ms:edgeOptions': {

          args: [

            '--start-maximized',

            '--disable-dev-shm-usage',

            '--log-level=3',

            '--silent',

            '--disable-logging',

          ],

          excludeSwitches: ['enable-logging'],

        },

      },

    };



    return browserCapabilities[browser] || browserCapabilities.chrome;

  }



  // Mobile capabilities with environment support

  const env = process.env.ENV?.toLowerCase() || 'staging';

  const mobileEnv = mobileEnvironments[env];



  return {

    platformName: 'Android',

    'appium:deviceName': process.env.DEVICE_NAME || 'emulator-5554',

    'appium:platformVersion': process.env.PLATFORM_VERSION || '',

    'appium:automationName': 'UiAutomator2',

    'appium:app': mobileEnv.appPath || process.env.APP_PATH || '',

    'appium:appPackage': mobileEnv.appPackage || process.env.APP_PACKAGE || '',

    'appium:appActivity': mobileEnv.appActivity || process.env.APP_ACTIVITY || '',

    'appium:noReset': false,

    'appium:fullReset': false,

    'appium:newCommandTimeout': 240,

    'appium:autoGrantPermissions': true,

    ...(process.env.UDID ? { 'appium:udid': process.env.UDID } : {}),

  };

}

