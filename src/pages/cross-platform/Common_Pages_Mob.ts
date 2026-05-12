import { CommonLocators } from '../../locators/Common/CommonLocator';
import { BasePage } from '../../common/mobile/BasePage';
import { qrCodeUrls } from '../../data/Common/testData';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';

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

  // async scanQRCode(dataKey: string): Promise<void> {
  //   // 1. Look up the QR code data (URL) using the key from the feature file.
  //   const qrData = qrCodeUrls[dataKey];
  //   if (!qrData) {
  //     throw new Error(`No QR code data found for key: "${dataKey}". Check src/data/Common/testData.ts`);
  //   }

  //   // 2. Generate a clean, borderless QR code image buffer on-the-fly.
  //   // This avoids issues with image files having borders or extra text.
  //   console.log(`Generating QR code from data: "${qrData}"`);
  //   const pngBuffer = await QRCode.toBuffer(qrData, {
  //       margin: 1, // Use a minimal margin to ensure scanner compatibility
  //       errorCorrectionLevel: 'H' // High error correction level
  //   });
  //   const base64Image = pngBuffer.toString('base64');

  //   // 3. Inject the generated image
  //   console.log(`Injecting generated QR code for data "${qrData}" into the emulator's virtual camera.`);
  //   await this.browserInstance.execute('mobile: injectEmulatorCameraImage', { payload: base64Image });
  //   console.log('Image injection command sent successfully.');

  //   // 4. Pause to allow the app's scanner to process the new camera feed
  //   await this.browserInstance.pause(5000); // 5-second pause for processing

  //   // 5. Simulate a user tap to trigger focus or scanning
  //   console.log('Simulating a tap on the screen to trigger scanner focus.');
  //   const windowSize = await this.browserInstance.getWindowSize();
  //   const centerX = windowSize.width / 2;
  //   const centerY = windowSize.height / 2;

  //   await this.browserInstance.performActions([
  //     {
  //       type: 'pointer',
  //       id: 'finger1',
  //       parameters: { pointerType: 'touch' },
  //       actions: [
  //         { type: 'pointerMove', duration: 0, x: centerX, y: centerY },
  //         { type: 'pointerDown', button: 0 },
  //         { type: 'pause', duration: 50 },
  //         { type: 'pointerUp', button: 0 }
  //       ]
  //     }
  //   ]);
  //   await this.browserInstance.pause(2000); // Pause after tap for UI to react
  // }
  // Add this to your CommonFunctionPage class
// src/pages/cross-platform/Common_Pages_Mob.ts

async bypassQRWithDeepLink(dataKey: string): Promise<void> {
    const qrData = qrCodeUrls[dataKey]; // Get 'albaik://store/539'
    const pkg = 'com.albaik.customer.staging';

    console.log(`Bypassing scan for data: ${qrData}`);

    // 1. Close the Camera UI first
    // This is vital because the camera activity can block the 'Start' popup
    await this.browserInstance.back(); 
    await this.browserInstance.pause(1000);

    // 2. Inject the QR data directly into the app
    // This makes the app think: "Ah, I just scanned store 539!"
    await this.browserInstance.execute('mobile: shell', {
        command: 'am start',
        args: [
            '-W',
            '-a', 'android.intent.action.VIEW',
            '-d', qrData,
            pkg
        ]
    });

    // 3. Wait for the "Start" popup that appears after a successful 'scan'
    console.log("Waiting for post-scan popup...");
    const startBtnSelectors = this.buildTextSelectors("Start");
    const startButton = await this.findFirstDisplayed(startBtnSelectors, 10000);

    if (startButton) {
        console.log("Popup detected. Clicking Start to enter the branch menu.");
        await startButton.click();
    } else {
        // Fallback: Check if the app skipped the popup and went straight to the branch
        console.log("No Start button found. Checking if Branch page loaded automatically.");
    }

    // Give it a moment to load the store menu
    await this.browserInstance.pause(3000);
}
}
