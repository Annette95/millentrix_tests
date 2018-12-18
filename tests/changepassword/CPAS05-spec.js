import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import changePasswordPage from "../../pages/changePasswordPage";
import securityPage from "../../pages/securityPage";
import menuAccount from "../../pages/menuAccount";

const wait = 1500;

describe("CPAS05 - User filled all necessary fields but canceled the changes", () => {

  it("Fills the form of changing password and cancels", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(2000);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.sleep(wait);
    myAccountPage.myAccount();
    browser.sleep(wait);
    myAccountPage.security();
    browser.sleep(wait);
    securityPage.changePassword();
    browser.sleep(wait);
    changePasswordPage.cancelChangePassword("!@#123QWEqwe", "123456aK*");
    browser.sleep(wait);
    myAccountPage.logout();
    browser.sleep(wait);
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(2000);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.sleep(wait);
    expect(menuAccount.userAccountName.getText()).toEqual("Acceptance Tester");
    myAccountPage.myAccount();
    browser.sleep(wait);
    myAccountPage.logout();
    browser.sleep(wait);
  },30000);
});