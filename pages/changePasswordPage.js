import MyAccountPage from "../pages/myAccountPage"
var EC = protractor.ExpectedConditions;

class ChangePassword {
    constructor(){

        this.currentPasswordField = element(by.xpath('//div/input[@formcontrolname="code"]'));
        this.newPasswordField = element(by.xpath('//div/input[@formcontrolname="newpassword"]'));
        this.verifyNewPasswordField = element(by.xpath('//div/input[@formcontrolname="confirm"]'))
        this.changePasswordSubmit = element(by.partialButtonText('Change password'));
        this.cancelChangePasswordButton = element(by.partialButtonText('CANCEL'));
        this.successPopUp = element(by.css("div.success.text-bold"));
        this.errorMessage = element(by.css("small.text-danger.ng-star-inserted"));

    };

    fillFormChangePassword(password, newpassword, verifynewpassword) {
        this.currentPasswordField.sendKeys(password);
        this.newPasswordField.sendKeys(newpassword);
        this.verifyNewPasswordField.sendKeys(verifynewpassword);
    };

    
    trySubmit(){
        this.changePasswordSubmit.click();
        browser.wait(EC.presenceOf(this.errorMessage), 3000);
    }

    submit(){
        this.changePasswordSubmit.click()   
        browser.wait(EC.presenceOf(this.successPopUp), 3000);
    };

    cancel (){
        this.cancelChangePasswordButton.click();
        browser.wait(EC.presenceOf(MyAccountPage.logoutButton), 3000);
    };

    refresh (){
        browser.refresh();
        browser.wait(EC.presenceOf(MyAccountPage.logoutButton), 2000);
    }


};

export default new ChangePassword();