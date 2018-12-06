import BasePage from '../basePage';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.emailInput = element(by.id('email-field'));
        this.passwordInput = element(by.id('password-field'));
        this.signin = element(by.xpath('//button [@type="submit"]'));
        this.signup = element(by.css('body > div:nth-child(1) > ng-component > div > div > div > div > div > div > div:nth-child(3) > form > div:nth-child(4) > div > button'));
        this.confirmButton = element(by.partialButtonText('CONFIRM'));
        //this.canvas = element(by.css('modal-container'));

        this.popUp = element(by.css('body > modal-container > div > div > app-modal-content > div.modal-footer.justify-content-center > button'));

        this.registrationPageIsDisplayed = element(by.css('h4.auth-title.pb-4.mb-2'));

        this.userAccountNumber = element(by.css('.account-number'));
        this.userAccountName = element(by.css('div.fullname'));
    };

    //methods

    login(email, password) {
        this.emailInput.sendKeys(email);
        this.passwordInput.sendKeys(password);
        this.signin.click();
    };

    signUp() {
        this.signup.click();
    };


    closeConfPopUp () {
        this.popUp.click();
    }


    // clickCanvas(toRight, toBottom) {
    //     browser.actions()
    //         .mouseMove(canvas, { x: toRight, y: toBottom })
    //         .click()
    //         .perform();
    // };

    confirmEmailResend() {
        this.confirmButton.click();
    };
};


export default new LoginPage();