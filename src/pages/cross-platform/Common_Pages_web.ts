import { testData } from '../../data/Common/testData';
import { CommonLocators } from '../../locators/Common/CommonLocator';

export class CommonWebPage {
    private get webDriver() {
        return (browser as any).isMultiremote ? (browser as any).web : browser;
    }

 
    async navigateToAdminPanel() {
        try {
            await this.webDriver.maximizeWindow();
        } catch (e) {}
        await this.webDriver.url(testData.web.baseUrl);
    }

    async loginToAdmin() {
        await this.webDriver.$(CommonLocators.emailInput).waitForDisplayed({ timeout: 10000 });
        await this.webDriver.$(CommonLocators.emailInput).setValue(testData.web.email);
        
        await this.webDriver.$(CommonLocators.webPasswordInput).setValue(testData.web.password);
        
        await this.webDriver.$(CommonLocators.loginBtn).click();
    }

    
    async waitForRestaurantPanel() {
        await this.webDriver.pause(5000);
    }
    
    
    async navigateToCurbsidePanel() {
        try {
            await this.webDriver.maximizeWindow();
        } catch (e) {}
        const url = (testData as any).curbside?.baseUrl || 'https://staging.ordering.albaikcloud.com/curbside_user/branches/539/session/new';
        await this.webDriver.url(url);
    }

   
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
        
        const capturedOrderId = (global as any).orderId;
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
        const capturedOrderId = (global as any).orderId;
        if (!capturedOrderId) {
            throw new Error("Order ID was not captured previously!");
        }
        
        const locator = CommonLocators.dynamicOrderRow(capturedOrderId);
        const element = await this.webDriver.$(locator);
        await element.waitForDisplayed({ timeout: 15000 });
        await element.click();
        console.log(`[Web] Clicked on order with ID: ${capturedOrderId}`);
    }

    async verify_order_details_page() {
        const capturedOrderId = (global as any).orderId;
        if (!capturedOrderId) {
            throw new Error("Order ID was not captured previously!");
        }
        
        const locator = CommonLocators.dynamicOrderRow(capturedOrderId);
        const element = await this.webDriver.$(locator);
        await element.waitForDisplayed({ timeout: 15000 });
        console.log(`[Web] Verified order details page is displayed for Order ID: ${capturedOrderId}`);
    }

    async accept_web_alert() {
        try {
            await this.webDriver.acceptAlert();
            console.log(`[Web] Accepted web alert`);
        } catch (e) {
            console.log(`[Web] No alert to accept or failed to accept alert: ${e}`);
        }
    }
}