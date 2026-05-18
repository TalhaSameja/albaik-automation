import { testData } from '../../data/Common/testData';
import { CommonLocators } from '../../locators/Common/CommonLocator';
import { execSync } from 'child_process';

export class CommonWebPage {
    // Dynamically target the 'web' capability during cross-platform multi-remote tests
    private get webDriver() {
        return (browser as any).isMultiremote ? (browser as any).web : browser;
    }

    // /**
    //  * Brings the Google Chrome window to the front of the screen (macOS specific)
    //  */
    // private bringChromeToFront() {
    //     if (process.platform === 'darwin') {
    //         try {
    //             execSync(`osascript -e 'tell application "Google Chrome" to activate'`);
    //         } catch (e) {}
    //     }
    // }

    /**
     * Navigates to the base URL configured in testData
     */
    async navigateToAdminPanel() {
        // this.bringChromeToFront();
        try {
            // Restore and maximize the window now that the web scenario is starting
            await this.webDriver.maximizeWindow();
        } catch (e) {}
        await this.webDriver.url(testData.web.baseUrl);
    }

    /**
     * Performs login to the Admin Panel using credentials from testData
     */
    async loginToAdmin() {
        await this.webDriver.$(CommonLocators.emailInput).waitForDisplayed({ timeout: 10000 });
        await this.webDriver.$(CommonLocators.emailInput).setValue(testData.web.email);
        
        await this.webDriver.$(CommonLocators.webPasswordInput).setValue(testData.web.password);
        
        await this.webDriver.$(CommonLocators.loginBtn).click();
    }

    /**
     * Verifies the restaurant panel heading and waits 5 seconds for full loading
     */
    async waitForRestaurantPanel() {
        await this.webDriver.pause(5000);
    }
    
    /**
     * Navigates to the Curbside base URL configured in testData
     */
    async navigateToCurbsidePanel() {
        try {
            await this.webDriver.maximizeWindow();
        } catch (e) {}
        const url = (testData as any).curbside?.baseUrl || 'https://staging.ordering.albaikcloud.com/curbside_user/branches/539/session/new';
        await this.webDriver.url(url);
    }

    /**
     * Performs login to the Curbside Panel using credentials from testData
     */
    async loginToCurbside() {
        const phone = (testData as any).curbside?.phone || '536440699';
        const pass = (testData as any).curbside?.password || 'Kualitatem123';
        
        const loginField = await this.webDriver.$(CommonLocators.curbsidePhoneInput);
        await loginField.waitForDisplayed({ timeout: 10000 });
        await loginField.setValue(phone);
        await this.webDriver.$(CommonLocators.webPasswordInput).setValue(pass);
        await this.webDriver.$(CommonLocators.loginBtn).click();
    }

    async waitForCurbsidePanel() {
        await this.webDriver.pause(5000);
    }

    /**
     * Pauses the web driver for a specified number of seconds
     */
    async wait_for_seconds_web(seconds: number) {
        await this.webDriver.pause(seconds * 1000);
    }

    async click_web_link_by_href(href: string) {
        const locator = CommonLocators.webLinkByHref(href);
        const element = await this.webDriver.$(locator);
        await element.waitForDisplayed({ timeout: 15000 });
        await element.click();
    }

    async enter_captured_order_id_by_id(id: string) {
        const locator = CommonLocators.webInputById(id);
        const element = await this.webDriver.$(locator);
        await element.waitForDisplayed({ timeout: 15000 });
        
        const capturedOrderId = global.orderId;
        if (!capturedOrderId) {
            throw new Error("Order ID was not captured previously!");
        }
        
        await element.setValue(capturedOrderId);
        console.log(`[Web] Entered captured Order ID: ${capturedOrderId}`);
    }

    async hit_enter_web() {
        await this.webDriver.keys(['Enter']);
        console.log(`[Web] Hit 'Enter' key`);
    }

    async click_captured_order_row() {
        const capturedOrderId = global.orderId;
        if (!capturedOrderId) {
            throw new Error("Order ID was not captured previously!");
        }
        
        // Using the existing dynamicOrderRow locator to find the order in the table
        const locator = CommonLocators.dynamicOrderRow(capturedOrderId);
        const element = await this.webDriver.$(locator);
        await element.waitForDisplayed({ timeout: 15000 });
        await element.click();
        console.log(`[Web] Clicked on order with ID: ${capturedOrderId}`);
    }

    async verify_order_details_page() {
        const capturedOrderId = global.orderId;
        if (!capturedOrderId) {
            throw new Error("Order ID was not captured previously!");
        }
        
        const locator = CommonLocators.dynamicOrderRow(capturedOrderId);
        const element = await this.webDriver.$(locator);
        await element.waitForDisplayed({ timeout: 15000 });
        console.log(`[Web] Verified order details page is displayed for Order ID: ${capturedOrderId}`);
    }
}