import Registration from "../pages/registrationPage"

var EC = protractor.ExpectedConditions;

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
    this.restrictedCountry = element(by.css("div.service-not-supported.mb-3"));
    this.acceptCookie = element(by.partialButtonText('got it'));
  }

  //methods

  login(email, password) {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    this.emailInput.sendKeys(email);
    this.passwordInput.sendKeys(password);
    this.signin.click();
    browser.sleep(2000);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.sleep(2000);
    this.acceptCookie.click();
  }

  newLogin(email, password) {
    this.emailInput.sendKeys(email);
    this.passwordInput.sendKeys(password);
    this.signin.click();
  }

  negativeLogin(email,password){
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    this.emailInput.sendKeys(email);
    this.passwordInput.sendKeys(password);
    this.signin.click();
    browser.sleep(2000);
  }

  signUp() {
    this.signup.click();
    browser.wait(EC.presenceOf(Registration.registrationPageIsDisplayed), 2000);
  }

  closeConfPopUp() {
    this.popUp.click();
    browser.sleep(1000);
  }

  confirmEmailResend() {
    this.confirmButton.click();
  }
}

export default new LoginPage();
