import { CommonLocators } from '../../locators/Common/CommonLocator';
import { BasePage } from '../../common/mobile/BasePage';
import { qrCodeUrls } from '../../data/Common/testData';

export class CommonFunctionPage extends BasePage {

  private static readonly DEFAULT_WAIT = 60000;
  private bottomSheetAnchor = CommonLocators.bottomSheetAnchor;

  async waitForHomeScreen(): Promise<void> {
    await this.waitForElement(this.bottomSheetAnchor, CommonFunctionPage.DEFAULT_WAIT);
  }

  private buildTextSelectors(text: string): string[] {
    const escaped = text.replace(/"/g, '\\"');
    const lower = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return [
      `//*[@text="${escaped}"]`,
      `//*[@content-desc="${escaped}"]`,
      `//*[contains(@text, "${escaped}")]`,
      `//*[contains(@content-desc, "${escaped}")]`,
      `android=new UiSelector().textMatches("(?i).*${lower}.*")`,
      `android=new UiSelector().descriptionMatches("(?i).*${lower}.*")`,
    ];
  }

  private async findFirstDisplayed(selectors: string[], timeout: number): Promise<WebdriverIO.Element | null> {
    const deadline = Date.now() + timeout;
    while (Date.now() < deadline) {
      for (const selector of selectors) {
        try {
          const element = await this.browserInstance.$(selector);
          if (await element.isExisting() && await element.isDisplayed()) {
            return element;
          }
        } catch {
          // try next selector
        }
      }
      await this.browserInstance.pause(500);
    }
    return null;
  }

  async verify_txt(text: string) {
    const element = await this.findFirstDisplayed(
      this.buildTextSelectors(text),
      CommonFunctionPage.DEFAULT_WAIT
    );
    if (!element) {
      throw new Error(`Text "${text}" not displayed on screen within ${CommonFunctionPage.DEFAULT_WAIT}ms`);
    }
    await expect(element).toBeDisplayed();
  }

  async click_btn(btn_name: string) {
    const element = await this.findFirstDisplayed(
      this.buildTextSelectors(btn_name),
      CommonFunctionPage.DEFAULT_WAIT
    );
    if (!element) {
      throw new Error(`Button "${btn_name}" not found on screen within ${CommonFunctionPage.DEFAULT_WAIT}ms`);
    }
    await element.click();
  }

  async wait_for_seconds(seconds: number) {
    await this.browserInstance.pause(seconds * 1000);
  }

  async scanQRCode(fileName: string): Promise<void> {
    const url = qrCodeUrls[fileName];
    if (!url) {
      throw new Error(`No QR code URL mapping found for file: ${fileName}`);
    }

    const appPackage = process.env.APP_PACKAGE || 'com.albaik.customer.staging';
    console.log(`[QR Scan] Decoded URL from "${fileName}" → ${url}`);

    // Strategy 1: Appium native deepLink command (cleanest, modern Appium)
    try {
      await this.browserInstance.execute('mobile: deepLink', {
        url: url,
        package: appPackage,
      });
      console.log(`[QR Scan] ✅ Deep link fired via mobile:deepLink → ${url}`);
      return;
    } catch (e1) {
      console.warn(`[QR Scan] mobile:deepLink failed (${(e1 as Error).message}), trying am start...`);
    }

    // Strategy 2: adb shell am start with VIEW intent
    try {
      await this.browserInstance.execute('mobile: shell', {
        command: 'am',
        args: ['start', '-a', 'android.intent.action.VIEW', '-d', url],
      });
      console.log(`[QR Scan] ✅ Deep link fired via am start → ${url}`);
      return;
    } catch (e2) {
      console.warn(`[QR Scan] am start failed (${(e2 as Error).message}), trying with package...`);
    }

    // Strategy 3: adb shell am start scoped to the app package and explicit component
    await this.browserInstance.execute('mobile: shell', {
      command: 'am',
      args: ['start', '-W', '-n', `${appPackage}/com.albaikapp.MainActivity`, '-a', 'android.intent.action.VIEW', '-d', url],
    });
    console.log(`[QR Scan] ✅ Deep link fired via am start + package → ${url}`);
  }
}
