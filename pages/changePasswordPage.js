class ChangePassword {
    constructor(){

        this.currentPasswordField = element(by.xpath('//div/input[@formcontrolname="code"]'));
        this.newPasswordField = element(by.xpath('//div/input[@formcontrolname="newpassword"]'));
        this.verifyNewPasswordField = element(by.xpath('//div/input[@formcontrolname="confirm"]'))
        this.changePasswordSubmit = element(by.partialButtonText('Change password'));
        this.cancelChangePasswordButton = element(by.partialButtonText('CANCEL'));
        this.successButton = element(by.partialButtonText('OK, GOT IT'));

    };
    changePasswordValidData(password, newpassword){
        this.currentPasswordField.sendKeys(password);
        this.newPasswordField.sendKeys(newpassword);
        this.verifyNewPasswordField.sendKeys(newpassword);
        this.changePasswordSubmit.click();
        
    };

    ok(){
        this.successButton.click();
    };

};

export default new ChangePassword();