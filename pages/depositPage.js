class DepositPage {
  constructor() {
    super();
    this.paymentCardMenu = element(
      by.xpath('(//div/div[text()[contains(.,"Payment Card")]])')
    );
    this.bankTransferMenu = element(
      by.xpath('(//div/div[text()[contains(.,"bank transfer")]])')
    );
    this.addBankButton = element(by.buttonText("ADD"));
    this.cryptocurrencyMenu = element(
      by.xpath('(//div/div[text()[contains(.,"cryptocurrency")]])')
    );
    this.modalWindow = element(by.xpath('//div/div[@class="modal-content"]'));
    this.cancelButton = element(by.xpath('//div/buttonp[text()="Cancel"]'));

    //methods
  }

  paymentByCard() {
    this.paymentByCard.click();
  }

  bankTransfer() {
    this.bankTransferMenu.click();
  }
  addButton() {
    this.addBankButton.click();
  }

  cryptocurrencyButton() {
    this.cryptocurrencyMenu.click();
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

  copyAddress(symbol) {
    const obj = {
      Address: document.getElementById("address").value
    };
    if (symbol === "XRP") {
      obj.Tag = document.getElementById("tag").value;
    }
    return obj;
  }

  cancel() {
    this.cancelButton.click();
  }
}

export default new DepositPage();
