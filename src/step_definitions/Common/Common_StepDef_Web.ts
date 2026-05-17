import { Then } from '@cucumber/cucumber';
import { testData } from '../../data/Common/testData';
import { CommonWebPage } from '../../pages/cross-platform/Common_Pages_web';

const commonWebPage = new CommonWebPage();


Then(/^navigate to the web admin panel$/, async () => {
    await commonWebPage.navigateToAdminPanel();
});

Then(/^login to the admin panel$/, async () => {
    await commonWebPage.loginToAdmin();
});

Then(/^the restaurant panel is loaded and ready$/, async () => {
    await commonWebPage.waitForRestaurantPanel();
});

Then(/^wait for "(\d+)" seconds in web$/, async (seconds: string) => {
    await commonWebPage.wait_for_seconds_web(parseInt(seconds));
});

Then(/^Click on web link with href "([^"]*)"$/, async (href: string) => {
    await commonWebPage.click_web_link_by_href(href);
});

Then(/^Enter captured order ID into web input with id "([^"]*)"$/, async (id: string) => {
    await commonWebPage.enter_captured_order_id_by_id(id);
});

Then(/^Hit "Enter" key in web$/, async () => {
    await commonWebPage.hit_enter_web();
});

Then(/^Click on the order with captured order ID$/, async () => {
    await commonWebPage.click_captured_order_row();
});

Then(/^Verify that the order details page is displayed with correct order ID$/, async () => {
    await commonWebPage.verify_order_details_page();
});
