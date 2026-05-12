import { Given, When, Then } from '@cucumber/cucumber';
import SettingsPage from '../../pages/mobile/SettingsPage';

Given('the Settings app is launched', async () => {
  await SettingsPage.waitForSettingsScreen();
});

When('the user taps on {string}', async (option: string) => {
  await SettingsPage.tapOption(option);
});

Then('the {string} option should be visible', async (option: string) => {
  const element = await $(`android=new UiSelector().text("${option}")`);
  await expect(element).toBeDisplayed();
});
