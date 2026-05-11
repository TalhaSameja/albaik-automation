import { BasePage } from '../../common/mobile/BasePage';

class SettingsPage extends BasePage {

  private settingsScreen = 'android=new UiSelector().text("Settings")';
  private networkOption  = 'android=new UiSelector().text("Network & internet")';

  byText(text: string): string {
    return `android=new UiSelector().text("${text}")`;
  }

  async waitForSettingsScreen(): Promise<void> {
    await this.waitForElement(this.settingsScreen);
  }

  async tapOption(optionText: string): Promise<void> {
    await this.tap(this.byText(optionText));
  }

  async isOptionVisible(optionText: string): Promise<boolean> {
    return this.isDisplayed(this.byText(optionText));
  }
}

export default new SettingsPage();
