const EC = protractor.ExpectedConditions;

class BankAccount {
  constructor() {
    this.bankAccountNameInput = element(
      by.xpath('//div/input[@formcontrolname="BankAccountName"]')
    );
    this.bankAccountNumberInput = element(
      by.xpath('//div/input[@formcontrolname="BankNumber"]')
    );
    this.ibanInput = element(by.xpath('//div/input[@formcontrolname="IBAN"]'));
    this.swiftInput = element(
      by.xpath('//div/input[@formcontrolname="Swift"]')
    );
    this.bankNameInput = element(
      by.xpath('//div/input[@formcontrolname="BankName"]')
    );
    this.bankAddressInput = element(
      by.xpath('//div/input[@formcontrolname="BankAddress"]')
    );
    this.countryDropdown = element(
      by.xpath('//div/select[@formcontrolname="CountryId"]')
    );
    this.fileFieldValidation = element(by.css("span.file-uploader-error-msg"));
    this.addAccountButton = element(
      by.xpath('(//div/button[@type="submit"])[2]')
    );

    // this.addAccountButton = element(
    //   by.partialButtonText('ADD ACCOUNT')
    // );
    this.cancelButton = element(
      by.xpath('(//div/*[text()[contains(.,"CANCEL")]])[last()]')
    );
    this.bankNameDisplay = element(
      by.xpath('//div/*[text()[contains(.,"MAIB")]]')
    );
    this.bankNameNotDisplay = element.all(
      by.css('div.overflow-hidden.bankNameHide')
    ).last();
  };

  //methods
  fillForm(baname, banumber, iban, swift, bname, baddress, bcountry) {
    browser.get("https://stage.millentrix.com/myaccount/payments/addbank");
    browser.wait(EC.presenceOf(this.bankAccountNameInput), 3000);
    this.bankAccountNameInput.sendKeys(baname);
    this.bankAccountNumberInput.sendKeys(banumber);
    this.ibanInput.sendKeys(iban);
    this.swiftInput.sendKeys(swift);
    this.bankNameInput.sendKeys(bname);
    this.bankAddressInput.sendKeys(baddress);
    this.countryDropdown.sendKeys(bcountry);
  
  }

  submit() {
    this.addAccountButton.click();
  }

  cancel() {
    this.cancelButton.click();
  }
}

export default new BankAccount();
