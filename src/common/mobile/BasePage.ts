export class BasePage {

  protected get browserInstance() {
    return browser.isMultiremote ? (global as any).mobile : browser;
  }

  async tap(selector: string): Promise<void> {
    const element = await this.browserInstance.$(selector);
    await element.waitForDisplayed({ timeout: 30000 });
    await element.click();
  }

  async fill(selector: string, text: string): Promise<void> {
    const element = await this.browserInstance.$(selector);
    await element.waitForDisplayed({ timeout: 30000 });
    await element.clearValue();
    await element.setValue(text);
  }

  async getText(selector: string): Promise<string> {
    const element = await this.browserInstance.$(selector);
    await element.waitForDisplayed({ timeout: 30000 });
    return element.getText();
  }

  async waitForElement(selector: string, timeout = 30000) {
    const element = await this.browserInstance.$(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  }

  async isDisplayed(selector: string): Promise<boolean> {
    try {
      const element = await this.browserInstance.$(selector);
      return await element.isDisplayed();
    } catch {
      return false;
    }
  }

  async waitForElementToDisappear(selector: string, timeout = 30000): Promise<void> {
    const element = await this.browserInstance.$(selector);
    await element.waitForDisplayed({ timeout, reverse: true });
  }

  async scrollTo(selector: string): Promise<void> {
    const element = await this.browserInstance.$(selector);
    await element.scrollIntoView();
  }

  async getAttribute(selector: string, attribute: string): Promise<string> {
    const element = await this.browserInstance.$(selector);
    await element.waitForDisplayed({ timeout: 30000 });
    return element.getAttribute(attribute);
  }
}
