import { Given, When, Then } from '@cucumber/cucumber';
import {CommonFunctionPage} from '../../pages/cross-platform/Common_Pages_Mob';

const commonFunctionPage = new CommonFunctionPage(); 

 Given('The Albaik application is launched', async () => {
  await commonFunctionPage.waitForHomeScreen();
  await commonFunctionPage.wait_for_seconds(5);
});
Given('The Albaik application is launched on emulator', async () => {
  await commonFunctionPage.waitForHomeScreen();
  await commonFunctionPage.wait_for_seconds(5);
});
Given('The Albaik application is launched on physical device', async () => {
  await commonFunctionPage.waitForHomeScreen();
  await commonFunctionPage.wait_for_seconds(5);
});
Given('The Albaik Driver application is launched', async () => {
  await commonFunctionPage.launchDriverApplication();
  await commonFunctionPage.wait_for_seconds(5);
});
Given('The Albaik Driver application is launched on emulator', async () => {
  await commonFunctionPage.launchDriverApplication();
  await commonFunctionPage.wait_for_seconds(5);
});
Given('The Albaik Driver application is launched on physical device', async () => {
  await commonFunctionPage.launchDriverApplication();
  await commonFunctionPage.wait_for_seconds(5);
});



Then('Verify that the {string} text is displayed', async (text: string) => {
  await commonFunctionPage.verify_txt(text);
});

Then('Click on {string} button', async (text: string) => {
  await commonFunctionPage.click_btn(text);
});

Then('Click on profile icon', async () => {
  await commonFunctionPage.click_profile_icon();
});

Then(/^wait for "?(\d+)"? [sS]econds?\s*$/, { timeout: 600000 }, async (seconds: string) => {
  await commonFunctionPage.wait_for_seconds(parseInt(seconds));
});

Then(/^Scroll down "(\d+)" lines?$/, async (lines: string) => {
  await commonFunctionPage.scrollDownLines(parseInt(lines));
});

Then(/^Swipe left "(\d+)" times?$/, async (times: string) => {
  await commonFunctionPage.swipeLeft(parseInt(times));
});

Then('Write {string} in the input field', async (text: string) => {
  await commonFunctionPage.write_in_input_field(text);
});

Then('Enter {string} into {string} Input', async (text: string, inputName: string) => {
  await commonFunctionPage.enter_text_in_input_field(text, inputName);
});

Then('Enter captured order ID into {string} Input', async (inputName: string) => {
  await commonFunctionPage.enter_captured_order_id_in_input_field(inputName);
});

Then(/^Hit "([^"]*)" key$/, async (keyName: string) => {
    await commonFunctionPage.hit_key(keyName);
});
Then('Enter password', async () => {
  await commonFunctionPage.enter_password();
});

Then('Enter {string} as password', async (password: string) => {
  await commonFunctionPage.enter_password(password);
});

Then('Select card ending with {string}', async (lastFourDigits: string) => {
  await commonFunctionPage.select_card_ending_with(lastFourDigits);
});
Then(
  'Capture and store order id from tracking card {string}',
  async (trackingCardId: string) => {
    await commonFunctionPage.capture_and_store_order_id(
      trackingCardId
    );
  }
);





When('I redirect to branch {string} to bypass QR scan', async (branchId: string) => {
    // Uses the Intent methodology to redirect the front-end UI
    await commonFunctionPage.redirectToBranchViaIntent(branchId);
});