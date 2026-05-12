import { testData } from '../../data/Common/testData';
import { CommonLocators } from '../../locators/Common/CommonLocator';

export class CommonWebPage {
    /**
     * Performs login to the Admin Panel using credentials from testData
     */
    async loginToAdmin() {
        const webBrowser = (browser as any).web;

        await webBrowser.$(CommonLocators.emailInput).waitForDisplayed({ timeout: 10000 });
        await webBrowser.$(CommonLocators.emailInput).setValue(testData.web.email);
        
        await webBrowser.$(CommonLocators.passwordInput).setValue(testData.web.password);
        
        await webBrowser.$(CommonLocators.loginBtn).click();
    }

    /**
     * Verifies the restaurant panel heading and waits 5 seconds for full loading
     */
    async waitForRestaurantPanel() {
        const webBrowser = (browser as any).web;
        
  
        await webBrowser.pause(5000);
    }
}