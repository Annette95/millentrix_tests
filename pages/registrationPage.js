import { browser } from "protractor";

class Registration {
  constructor() {
    this.firstNameInput = element(by.css('[formcontrolname="FirstName"]'));
    this.lastNameInput = element(by.css('[formcontrolname="LastName"]'));
    this.emailInput = element(by.css('[formcontrolname="Email"]'));
    this.passwordInput = element(by.css('[formcontrolname="Password"]'));
    this.repeatPasswordInput = element(
      by.css('[formcontrolname="PasswordConfirm"]')
    );
    this.countryDropdown = element(by.id("country-field"));
    this.usCitizen = element(
      by.css('[formcontrolname="USCitizen"] > .btn-selector-left')
    );
    this.usRezident = element(
      by.css('[formcontrolname="USResident"] > .btn-selector-left')
    );
    this.usTaxPerson = element(
      by.css('[formcontrolname="USTaxPerson"] > .btn-selector-left')
    );
    this.legalAgeCheckBox = element(
      by.xpath('//label[input[@formcontrolname="IsLegalAge"]]')
    );
    this.termsAndConditions = element(
      by.css('input[formcontrolname="TermAndCondition"]')
    );
    this.createAccountButton = element(by.buttonText("Create Account"));

    this.registrationPageIsDisplayed = element(
      by.css("h4.auth-title.pb-4.mb-2")
    );

    this.phoneInput = element(by.xpath('//input[@formcontrolname="Phone"]'));
    this.phoneNumberSubmit = element(by.css("strong"));
    this.codeInput = element(by.css(".code-box"));
    this.codeConfirm = element(by.xpath('//div/button[@type="submit"]'));

    this.succesfulRegistered = element(by.css("div.success-text.mb-3"));
    this.invalidEmail = element(
      by.xpath('//input[@formcontrolname="Email"]/following::small')
    );
    this.duplicatePhoneNumber = element(by.xpath("//small"));
  }

  //methods
  registerNewUser(fname, lname, nemail, npassword, rpassword, country) {
    this.firstNameInput.sendKeys(fname);
    this.lastNameInput.sendKeys(lname);
    this.emailInput.sendKeys(nemail);
    this.passwordInput.sendKeys(npassword);
    this.repeatPasswordInput.sendKeys(rpassword);
    this.countryDropdown.sendKeys(country);
    this.legalAgeCheckBox.click();
    browser.executeScript("arguments[0].click()", this.termsAndConditions);
    this.createAccountButton.click();
  }

  phoneVerify(phone) {
    this.phoneInput.sendKeys(phone);
    this.phoneNumberSubmit.click();
  }

  setCode(code) {
    this.codeInput.sendKeys(code);
  }

  sendCode() {
    this.codeConfirm.click();
  }
}

export default new Registration();
