import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import changePasswordPage from "../../pages/changePasswordPage";
import securityPage from "../../pages/securityPage";

const wait = 1000;

describe("Test with changing password", () => {

  it("CPA01 - User successfully changed password ", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    // loginPage.login("millentrix.tester@gmail.com", "123456aK*");
    browser.sleep(wait);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.sleep(wait);
    myAccountPage.myAccount();
    browser.sleep(wait);
    myAccountPage.security();
    browser.sleep(wait);
    securityPage.changePassword();
    browser.sleep(wait);
    changePasswordPage.changePasswordValidData("!@#123QWEqwe", "123456aK*");
    // changePasswordPage.changePasswordValidData('123456aK*','!@#123QWEqwe');
    browser.sleep(wait);
    changePasswordPage.ok();
    browser.sleep(wait);
    myAccountPage.logout();

    //againt the same test, but it changes back the password that was before

    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "123456aK*");
    // loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(wait);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.sleep(wait);
    myAccountPage.myAccount();
    browser.sleep(wait);
    myAccountPage.security();
    browser.sleep(wait);
    securityPage.changePassword();
    browser.sleep(wait);
    changePasswordPage.changePasswordValidData("123456aK*", "!@#123QWEqwe");
    //changePasswordPage.changePasswordValidData("!@#123QWEqwe", ""123456aK*");
    browser.sleep(wait);
    changePasswordPage.ok();
    browser.sleep(wait);
    myAccountPage.logout();
  },35000);
});
