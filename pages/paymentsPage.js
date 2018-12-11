class PaymentsPage {
  constructor() {
    this.addButton = element(
      by.xpath('(//div/button[text()[contains(.,"ADD")]])[last()]')
    );
    this.editButton = element(
      by.xpath(
        '(//div/button[text()[contains(.,"EDIT")] and not(@class, "disabled")])[last()]'
      )
    );
    this.deleteButton = element(
      by.xpath(
        '(//div/button[text()[contains(.,"delete")] and not(@class, "disabled")])[last()]'
      )
    );
    this.successMessage = element(by.xpath('//div/div[@id="message"]'));
    this.editBankButton = element(by.partialButtonText("EDIT ACCOUNT"));
    this.submitButton = element(
      by.xpath('(//div/button[text()[contains(.,"OK, GOT IT")]')
    );

    this.EC = protractor.ExpectedConditions;
  }

  addBank() {
    this.addButton.click();
  }

  editBank() {
    this.editButton.click();
  }

  deleteBank() {
    this.deleteButton.click();
  }

  editSubmit() {
    this.editBankButton.click();
  }

  ok() {
    this.submitButton.click();
  }

  acceptAllert() {
    browser.wait(EC.alertIsPresent(), 15000, "Alert is not getting present :(");
    browser
      .switchTo()
      .alert()
      .accept();
  }
}

export default new PaymentsPage();
