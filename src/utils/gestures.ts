export class Gestures {

  static async swipeUp(): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    await browser.action('pointer')
      .move({ duration: 0, x: Math.round(width / 2), y: Math.round(height * 0.8) })
      .down({ button: 0 })
      .move({ duration: 1000, x: Math.round(width / 2), y: Math.round(height * 0.2) })
      .up({ button: 0 })
      .perform();
  }

  static async swipeDown(): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    await browser.action('pointer')
      .move({ duration: 0, x: Math.round(width / 2), y: Math.round(height * 0.2) })
      .down({ button: 0 })
      .move({ duration: 1000, x: Math.round(width / 2), y: Math.round(height * 0.8) })
      .up({ button: 0 })
      .perform();
  }

  static async swipeLeft(): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    await browser.action('pointer')
      .move({ duration: 0, x: Math.round(width * 0.8), y: Math.round(height / 2) })
      .down({ button: 0 })
      .move({ duration: 1000, x: Math.round(width * 0.2), y: Math.round(height / 2) })
      .up({ button: 0 })
      .perform();
  }

  static async swipeRight(): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    await browser.action('pointer')
      .move({ duration: 0, x: Math.round(width * 0.2), y: Math.round(height / 2) })
      .down({ button: 0 })
      .move({ duration: 1000, x: Math.round(width * 0.8), y: Math.round(height / 2) })
      .up({ button: 0 })
      .perform();
  }

  static async scrollUntilVisible(selector: string, maxScrolls = 10): Promise<void> {
    for (let i = 0; i < maxScrolls; i++) {
      const element = await $(selector);
      if (await element.isDisplayed()) return;
      await Gestures.swipeUp();
    }
    throw new Error(`Element "${selector}" not found after ${maxScrolls} scrolls`);
  }
}
