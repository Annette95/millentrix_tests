class LoginPage {
  constructor() {
    this.emailInput = element(by.id("email-field"));
    this.passwordInput = element(by.id("password-field"));
    this.signin = element(by.partialButtonText("SIGN IN"));
    this.signup = element(by.partialButtonText("SIGN UP"));
    this.confirmButton = element(by.partialButtonText("CONFIRM"));
    this.popUp = element(by.partialButtonText("CLOSE")); // when user confirmed the email
    this.popCheckEmail = element(by.xpath('//div[@class="modal-body"]/div'));
    this.signInPageDisplayed = element(by.css("h3.sign-in"));
    this.phoneVerificationPageDisplayed = element(
      by.css("h4.text-center.mb-4")
    );
    this.textInvalidInformationDisplay = element(
      by.css(".alert-48")

    );
    this.restrictedCountry = element (by.css("div.service-not-supported.mb-3"));
  }

  //methods

  login(email, password) {
    this.emailInput.sendKeys(email);
    this.passwordInput.sendKeys(password);
    this.signin.click();
  }

  signUp() {
    this.signup.click();
  }

  closeConfPopUp() {
    this.popUp.click();
  }

  confirmEmailResend() {
    this.confirmButton.click();
  }
}

export default new LoginPage();
