import { Then } from '@cucumber/cucumber';
import { testData } from '../../data/Common/testData';
import { CommonWebPage } from '../../pages/cross-platform/Common_Pages_web';

const commonWebPage = new CommonWebPage();


Then(/^navigate to the web admin panel$/, async () => {
    // Construct URL: https://staging.ordering.albaikcloud.com/admin
    const adminUrl = `${testData.web.baseUrl}admin`;
    
    // Target the 'web' capability specifically defined in wdio.config.ts
    await (browser as any).web.url(adminUrl);
});

Then(/^login to the admin panel$/, async () => {
    await commonWebPage.loginToAdmin();
});

Then(/^the restaurant panel is loaded and ready$/, async () => {
    await commonWebPage.waitForRestaurantPanel();
});
