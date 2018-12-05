import BasePage from '../basePage';

class LoginPage extends BasePage {
    constructor () {
        super(); 
    this.emailInput = element(by.id('email-field'));
    this.passwordInput = element(by.id('password-field'));
    this.signin = element(by.xpath('//button [@type="submit"]'));
    this.signup = element(by.xpath ('button [type="button"]'));
    this.confirmButton = element(by.partialButtonText('CONFIRM'));
    this.canvas = element(by.css('modal-container'));

    this.registrationPageIsDisplayed = element(by.css('h4.auth-title.pb-4.mb-2'));

    this.userAccountNumber = element(by.css('.account-number'));
    this.userAccountName = element(by.css('div.fullname'));


    
    
    this.login = function (email, password){
        this.emailInput.sendKeys(email);
        this.passwordInput.sendKeys(password);
        this.signin.click();
    };

    this.signUp = () => {
        signup.click();
      };
      
    this.clickCanvas = (toRight, toBottom) => {
        browser.actions()
          .mouseMove(canvas, { x: toRight, y: toBottom })
          .click()
          .perform();
      };
    
      this.confirmEmailResend = () => {
        confirmButton.click();
      };
};

};

export default new LoginPage ();