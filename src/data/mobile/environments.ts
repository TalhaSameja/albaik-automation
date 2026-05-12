export const mobileEnvironments = {
  dev: {
    appPath: process.env.DEV_APP_PATH || '',
    appPackage: process.env.DEV_APP_PACKAGE || '',
    appActivity: process.env.DEV_APP_ACTIVITY || '',
    serverUrl: 'https://dev.api.albaik.com',
  },
  staging: {
    appPath: process.env.STAGING_APP_PATH || '',
    appPackage: process.env.STAGING_APP_PACKAGE || '',
    appActivity: process.env.STAGING_APP_ACTIVITY || '',
    serverUrl: 'https://staging.api.albaik.com',
  },
  prod: {
    appPath: process.env.PROD_APP_PATH || '',
    appPackage: process.env.PROD_APP_PACKAGE || '',
    appActivity: process.env.PROD_APP_ACTIVITY || '',
    serverUrl: 'https://api.albaik.com',
  },
};
