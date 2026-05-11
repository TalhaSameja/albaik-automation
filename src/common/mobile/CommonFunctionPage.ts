export class CommonFunctionPage {

  private async getTextLocator(text: string) {
    return await $(`//*[contains(@text, "${text}")]`);
  }
  
async verify_txt(verify_text: string) {
    const txt = await this.getTextLocator(verify_text);
    await expect(txt).toBeDisplayed({ wait: 30000 });
  }

 
}
