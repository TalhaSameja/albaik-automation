import { mobileEnvironments } from './environments';

const env = process.env.ENV?.toLowerCase() || 'staging';
const currentEnv = mobileEnvironments[env];

export const MobileExampleData = {
  branchSearchTerm: env === 'dev' ? 'ktm-dev' : env === 'staging' ? 'ktm-staging' : 'ktm',
  restaurantName: env === 'dev' ? 'KTM Dev' : env === 'staging' ? 'KTM Staging' : 'KTM',
  serverUrl: currentEnv.serverUrl,
};
