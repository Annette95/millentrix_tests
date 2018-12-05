import '../basePage';

class Registration extends BasePage{
    constructor (){
        super();
    this.firstNameInput = element(by.css('.ng-dirty:nth-child(2)'));
    this.lastNameInput = element(by.css('.col-6 .ng-untouched'));
    this.emailInput = element(by.css('.form-group > .input-group-auth > .ng-dirty'));
    this.passwordInput = element(by.css('.app-form-control:nth-child(1)'));
    this.repeatPasswordInput = element(by.css('.pb-2 > .input-group-auth > .ng-untouched'));
    this.countryDropdown = element(by.id('country-field'));
    this.usCitizen = element(by.css('label.btn-selector-left'));
    this.usRezident = element(by.css('.form-group:nth-child(7) .btn-selector-left'));
    this.usTaxPerson = element(by.css('.ng-untouched > .btn-selector-left'));
    this.legalAgeCheckBox = element(by.css('label.custom-control.app-custom-checkbox'));
    this.termsAndConditions = element(by.css('.form-group:nth-child(10) .custom-control'));
    this.createAccountButton = element(by.buttonText('Create Account'));

    this.phoneInput = element(by.css('.input-group > .ng-dirty'));
    this.phoneNumberSubmit = element(by.css('strong'));
    this.codeInput = element(by.css('.code-box'));
    this.codeSubmit = element(by.css('strong'));

    this.setFirstName = (name) =>{
        this.firstNameInput
    }
    };
};

export default new Registration();