class WithdrawPage {
  constructor() {
    this.cryptowalletButton = element(
      by.xpath('(//div/div[text()[contains(.,"crypto wallet")]])')
    );
    this.walletAddress = element(
      by.xpath('//div/input[@name="walletAddress"]')
    );
    this.rippleTag - element(by.xpath('//div/input[@name="rippleTag"]'));
    this.amountWithdrawCrypto = element(
      by.xpath('//div/input[@name="amountWithdrawCrypto"]')
    );
    this.continueButton = element(by.xpath('(//div/button[@type="submit"])'));
  }

  selectCurrency(currency) {
    switch (currency) {
      case "BTC":
        element(by.xpath('//select/option[text()[contains(.,"BTC")]]')).click();
        break;
      case "LTC":
        element(by.xpath('//select/option[text()[contains(.,"LTC")]]')).click();
        break;
      case "BCHABC":
        element(
          by.xpath('//select/option[text()[contains(.,"BCHABC")]]')
        ).click();
        break;
      case "XRP":
        element(by.xpath('//select/option[text()[contains(.,"XRP")]]')).click();
        break;
      default:
        element(by.xpath('//select/option[text()[contains(.,"BTC")]]')).click();
        break;
    }
  }

  enterAddress(symbol, data) {
    this.walletAddress.sendKeys(data.address);
    if (symbol === "XRP") {
      this.rippleTag.sendKeys(data.tag);
    }
  }

  enterWithdrawAmount(amount) {
    this.amountWithdrawCrypto.sendKeys(amount);
  }

  submit() {
    this.continueButton.click();
  }
}
export default new WithdrawPage();
