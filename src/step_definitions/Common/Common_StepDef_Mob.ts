import { Given, When, Then } from '@cucumber/cucumber';
import {CommonFunctionPage} from '../../pages/cross-platform/Common_Pages_Mob';

const commonFunctionPage = new CommonFunctionPage(); 

 Given(/^The Albaik application is launched(?: on emulator)?$/, async () => {
  await commonFunctionPage.waitForHomeScreen();
});

Then('Verify that the {string} text is displayed', async (text: string) => {
  await commonFunctionPage.verify_txt(text);
});

Then('Click on {string} button', async (text: string) => {
  await commonFunctionPage.click_btn(text);
});

Then(/^wait for "?(\d+)"? [sS]econds?\s*$/, async (seconds: string) => {
  await commonFunctionPage.wait_for_seconds(parseInt(seconds));
});

// Then('Scan QR code from file {string}', async (fileName: string) => {
//   await commonFunctionPage.scanQRCode(fileName);
// });
When('I bypass the QR scan for {string}', async (branchKey: string) => {
    // We call the deep link method directly. 
    // This ignores the camera and jumps straight to the store.
    await commonFunctionPage.bypassQRWithDeepLink(branchKey);
});