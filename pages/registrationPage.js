import BasePage from '../basePage';

class Registration extends BasePage {
    constructor() {
        super();
        this.firstNameInput = element(by.css('[formcontrolname="FirstName"]'));
        this.lastNameInput = element(by.css('[formcontrolname="LastName"]'));
        this.emailInput = element(by.css('[formcontrolname="LastName"]'));
        this.passwordInput = element(by.css('[formcontrolname="Password"]'));
        this.repeatPasswordInput = element(by.css('[formcontrolname="Password"]'));
        this.countryDropdown = element(by.id('country-field'));
        this.usCitizen = element(by.css('[formcontrolname="USCitizen"] > .btn-selector-left'));
        this.usRezident = element(by.css('[formcontrolname="USResident"] > .btn-selector-left'));
        this.usTaxPerson = element(by.css('[formcontrolname="USTaxPerson"] > .btn-selector-left'));
        this.legalAgeCheckBox = element(by.xpath('//label[input[@formcontrolname="IsLegalAge"]]'));
        this.termsAndConditions = element(by.css('input[formcontrolname="TermAndCondition"]'));
        this.createAccountButton = element(by.buttonText('Create Account'));

        this.phoneInput = element(by.xpath('//input[@formcontrolname="Phone"]'));
        this.phoneNumberSubmit = element(by.css('strong'));
        this.codeInput = element(by.css('.code-box'));
        this.codeConfirm = element(by.xpath('//div/button[@type="submit"]')).click();

        this.setFirstName = (name) =>{
            this.firstNameInput.sendKeys(name);
        };
        // this.setLastName = (name) => {
        //     this.lastNameInput.sendKeys(name);
        //   };

        //   this.setEmail = (email) => {
        //     this.emailInput.sendKeys(email);
        //   };

        //   this.setPasswod = (password) => {
        //     this.passwordInput.sendKeys(password);
        //   };

        //   this.setRepeatPassword = (password) => {
        //     this.repeatPasswordInput.sendKeys(password);
        //   };

        //   this.chooseCountry = (country) => {
        //     this.countryDropdown.sendKeys(country);
        //   };

        //   this.answerUsCitizen = () => {
        //     this.usCitizen.click();
        //   };

        //   this.answerUsRezident = () => {
        //       this.usRezident.click();
        //   };


        //   this.answerUsTaxPerson = () => {
        //       this.usTaxPerson.click();
        //   };

        //   this.checkLegalAge = () => {
        //     this.legalAgeCheckBox.click();
        //   };

        //   this.checkTermsAndCondition = () => {
        //    this.termsAndConditions.click();

        //    // browser.executeScript('arguments[0].click()',termsAndConditions);
        //   };

        //   this.createAccount = () => {
        //     this.createAccountButton.click();
        //   };

        //   this.setPhone = (phone = '644648536') => {
        //    this.phoneInput.sendKeys(phone);
        //   };

        //   this.phoneSubmit = () => {
        //       this.phoneNumberSubmit.click();
        //   };

        //   this.setCode = () => {
        //       this.codeInput.sendKeys()
        //   };

        //   this.sendCode = () => {
        //     element(by.xpath('//div/button[@type="submit"]')).click();
        // };

        //   this.confirmCode = () => {
        //     this.codeConfirm.click();
        //   };


        // this.registerNewUser = function (fname, lname, nemail, npassword, rpassword) {
        //     this.firstNameInput.sendKeys(fname);
        //     this.lastNameInput.sendKeys(lname);
        //     this.emailInput.sendKeys(nemail);
        //     this.passwordInput.sendKeys(npassword);
        //     this.repeatPasswordInput.sendKeys(rpassword);
        //     this.countryDropdown.click();
        //     this.agecheckbox.click();
        //     this.termsAndConditions.click();
        //     //this.createAccountButton.click();
        // };
    };
};

export default new Registration();