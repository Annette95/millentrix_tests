import ChangePassword from "../pages/changePasswordPage";
var EC = protractor.ExpectedConditions;

class SecurityPage {
    constructor(){
        this.enable2FAButton = element(by.partialButtonText('ENABLE'));
        this.disable2FAButton = element(by.partialButtonText('DISABLE'));
        this.changePasswordButton = element(by.partialButtonText('Change Password'));

    };

    enable2FA(){
        this.enable2FAButton.click();
    };

    disable2FA(){
        this.disable2FAButton.click();
    };

    changePassword(){
        this.changePasswordButton.click();
        browser.wait(EC.presenceOf(ChangePassword.currentPasswordField), 2000);
    }
    
};

export default new SecurityPage();