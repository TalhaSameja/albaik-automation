import { CommonLocators } from '../../locators/Common/CommonLocator';
import { BasePage } from '../../common/mobile/BasePage';
import { qrCodeUrls } from '../../data/Common/testData';
import { testData } from '../../data/Common/testData';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';
import { Gestures } from '../../utils/gestures';

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
    // 1. Check if btn_name is a direct key mapped in CommonLocators
    const predefinedLocator = (CommonLocators as any)[btn_name];
    if (predefinedLocator) {
        if (typeof predefinedLocator === 'string') {
            const element = await this.browserInstance.$(predefinedLocator);
            await element.waitForDisplayed({ timeout: CommonFunctionPage.DEFAULT_WAIT });
            await element.click();
            return;
        } else if (Array.isArray(predefinedLocator)) {
            const element = await this.findFirstDisplayed(predefinedLocator, CommonFunctionPage.DEFAULT_WAIT);
            if (element) {
                await element.click();
                return;
            }
        }
    }

    // 1.5 Handle system popup buttons explicitly by resource-id (e.g., location permission "No thanks" button)
    if (btn_name.startsWith('android:id/')) {
        const locator = CommonLocators.systemButton(btn_name);
        const element = await this.browserInstance.$(locator);
        await element.waitForDisplayed({ timeout: CommonFunctionPage.DEFAULT_WAIT });
        await element.click();
        return;
    }

    // 2. Fallback to generic text search if not mapped in locators
    const element = await this.findFirstDisplayed(
      this.buildTextSelectors(btn_name),
      CommonFunctionPage.DEFAULT_WAIT
    );
    if (!element) {
      throw new Error(`Button "${btn_name}" not found on screen within ${CommonFunctionPage.DEFAULT_WAIT}ms`);
    }
    await element.click();
  }

  async click_profile_icon() {
    const xpath = '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/com.horcrux.svg.SvgView/com.horcrux.svg.g/ya1';
    
    // Target only the mobile emulator instance during cross-platform executions to prevent Chrome from timing out
    const driver = (this.browserInstance as any).isMultiremote 
      ? (this.browserInstance as any).mobile 
      : this.browserInstance;
      
    const element = await driver.$(xpath);
    await element.waitForExist({ timeout: CommonFunctionPage.DEFAULT_WAIT }); 
    await element.click();
  }

  
  async wait_for_seconds(seconds: number) {
    await this.browserInstance.pause(seconds * 1000);
  }

 async scrollDownLines(lines: number) {
  const { width, height } = await this.browserInstance.getWindowRect();

  // Center horizontally
  const startX = Math.floor(width / 2);

  // Start near bottom and move upward
  const startY = Math.floor(height * 0.80);
  const endY = Math.floor(height * 0.30);

  for (let i = 0; i < lines; i++) {
    try {
      // Recommended reliable W3C touch action
      await this.browserInstance.performActions([
        {
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            {
              type: 'pointerMove',
              duration: 0,
              x: startX,
              y: startY
            },
            {
              type: 'pointerDown',
              button: 0
            },
            {
              type: 'pause',
              duration: 300
            },
            {
              type: 'pointerMove',
              duration: 800,
              x: startX,
              y: endY
            },
            {
              type: 'pointerUp',
              button: 0
            }
          ]
        }
      ]);

      await this.browserInstance.releaseActions();

      // wait for animation/UI stabilization
      await this.browserInstance.pause(1000);

    } catch (error) {
      console.log('Scroll failed:', error);
    }
  }
}
  async write_in_input_field(text: string) {
    await this.browserInstance.keys(text);
  }

  async enter_text_in_input_field(textToEnter: string, inputName: string) {
    // 1. Check if inputName is a direct key mapped in CommonLocators
    const predefinedLocator = (CommonLocators as any)[inputName];
    if (predefinedLocator) {
        if (typeof predefinedLocator === 'string') {
            const element = await this.browserInstance.$(predefinedLocator);
            await element.waitForDisplayed({ timeout: CommonFunctionPage.DEFAULT_WAIT });
            await element.setValue(textToEnter);
            return;
        } else if (Array.isArray(predefinedLocator)) {
            const element = await this.findFirstDisplayed(predefinedLocator, CommonFunctionPage.DEFAULT_WAIT);
            if (element) {
                await element.setValue(textToEnter);
                return;
            }
        }
    }

    // 2. Fallback to generic text search if not mapped in locators
    const dynamicLocator = CommonLocators.dynamicTextInput(inputName);
    const element = await this.browserInstance.$(dynamicLocator);
    try {
        await element.waitForDisplayed({ timeout: CommonFunctionPage.DEFAULT_WAIT });
    } catch (error) {
        throw new Error(`Input field "${inputName}" not found on screen within ${CommonFunctionPage.DEFAULT_WAIT}ms`);
    }
    await element.setValue(textToEnter);
  }

  async hit_key(keyName: string) {
    if (keyName.toLowerCase() === 'enter') {
      await this.browserInstance.keys(['Enter']);
    } else {
      await this.browserInstance.keys([keyName]);
    }
  }

  async select_card_ending_with(lastFourDigits: string) {
    const locator = CommonLocators.cardEndingWith(lastFourDigits);
    const element = await this.browserInstance.$(locator);
    await element.waitForDisplayed({ timeout: CommonFunctionPage.DEFAULT_WAIT });
    await element.click();
  }

  async enter_password(password?: string) {
    const text = password || testData.mobile.password;
    const element = await this.browserInstance.$(CommonLocators.passwordInput);
    await element.waitForDisplayed({ timeout: CommonFunctionPage.DEFAULT_WAIT });
    await element.setValue(text);
  }

  
    // async bypassScanWithLink(deepLink: string): Promise<void> {
    //     const pkg = 'com.albaik.customer.staging';
    //     console.log(`Executing deep link bypass: ${deepLink}`);

    //     // 1. Navigate back to ensure we exit the camera view if it's open
    //     await this.browserInstance.back();
    //     await this.browserInstance.pause(1000);

    //     // 2. Use ADB shell to trigger the deep link intent
    //     await this.browserInstance.execute('mobile: shell', {
    //         command: 'am start',
    //         args: ['-W', '-a', 'android.intent.action.VIEW', '-d', deepLink, pkg]
    //     });

    //     // 3. Handle the "Start" or "Order Here" popup that follows a successful link trigger
    //     console.log("Waiting for post-deep link confirmation...");
    //     const startButton = await this.findFirstDisplayed(this.buildTextSelectors("Start"), 10000);

    //     if (startButton) {
    //         console.log("Confirmation popup detected. Proceeding to branch menu.");
    //         await startButton.click();
    //     }

    //     await this.browserInstance.pause(3000);
    // }

    // /**
    //  * Redirects the application UI to a specific branch using the Intent methodology.
    //  * This bypasses the camera scan and attempts to force the app to navigate to the store page.
    //  * @param branchId The ID of the branch (e.g., "539")
    //  */
    async redirectToBranchViaIntent(branchId: string): Promise<void> {
        const deepLink = `albaik://store/${branchId}`; // Construct the deep link
        const pkg = process.env.APP_PACKAGE || 'com.albaik.customer.staging'; // Get package from .env or fallback
        const appActivity = process.env.APP_ACTIVITY || '.MainActivity'; // Get main activity from .env
        
        console.log(`Initiating front-end redirection to branch ${branchId} via Deep Link: ${deepLink}`);

        // 1. Dismiss the camera/scanner and any potential overlays
        try {
            console.log("[DEBUG] Dismissing camera/overlay before redirection...");
            await this.browserInstance.back();
            await this.browserInstance.pause(1500);
            const currentActivityPackage = await this.browserInstance.getCurrentPackage();
            if (currentActivityPackage === 'com.android.permissioncontroller' || currentActivityPackage === 'com.android.camera2') {
                await this.browserInstance.back();
                await this.browserInstance.pause(1500); 
            }
        } catch (e) {
            console.log("[DEBUG] Back navigation not required or failed to dismiss camera/overlay (might not have been open).");
        }

        
        let deepLinkSuccessful = false;
        const componentName = `${pkg}/${appActivity}`;
        
        try {
            console.log(`[DEBUG] Attempting to force deep link via explicit component: ${componentName}`);
            
            await this.browserInstance.execute('mobile: shell', {
                command: 'am start',
                args: [
                    '-W',
                    '-n', componentName, 
                    '-a', 'android.intent.action.VIEW',
                    '-d', deepLink
                ]
            });
            deepLinkSuccessful = true;
            console.log(`[DEBUG] Forced deep link sent successfully.`);
        } catch (error) {
            console.warn(`[DEBUG] Explicit component deep link failed. Error: ${error.message || error}`);
            console.log("[DEBUG] Retrying with standard system-wide deep link resolve...");
            try {
                await this.browserInstance.execute('mobile: deepLink', { url: deepLink });
                deepLinkSuccessful = true;
                console.log("[DEBUG] System-wide deep link sent successfully.");
            } catch (err2) {
                console.warn(`[DEBUG] System-wide deep link failed. Error: ${err2.message || err2}`);
            }
        }

        if (!deepLinkSuccessful) {
            throw new Error(`Failed to send deep link intent. The OS could not resolve it. Check if APP_PACKAGE and APP_ACTIVITY are correct in .env`);
        }

        await this.browserInstance.pause(4000);
    }
    async capture_and_store_order_id(
  trackingCardId: string
) {

  const orderIdLocator =
    CommonLocators.trackingOrderId(trackingCardId);

  const orderIdElement =
    await this.browserInstance.$(orderIdLocator);

  await orderIdElement.waitForDisplayed({
    timeout: 20000,
  });

  const fullText =
    await orderIdElement.getText();

  // Example => #S71582
  const orderId =
    fullText.replace('#', '').trim();

  global.orderId = orderId;

  console.log(
    `Captured Order ID: ${global.orderId}`
  );
}
      
}
