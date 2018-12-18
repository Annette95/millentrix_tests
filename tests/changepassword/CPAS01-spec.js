import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import changePasswordPage from "../../pages/changePasswordPage";
import securityPage from "../../pages/securityPage";
import menuAccount from "../../pages/menuAccount";

const wait = 1500;

describe("CPAS01 - User successfully changed password", () => {

  it("Change password  ", () => {
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
    changePasswordPage.fillFormChangePassword("!@#123QWEqwe", "123456aK*", "123456aK*");
    changePasswordPage.submit();
    browser.sleep(wait);
    changePasswordPage.ok();
    browser.sleep(wait);
    myAccountPage.logout();
    browser.sleep(wait);
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "123456aK*");
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

  it("Change password Back ", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "123456aK*");
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
    changePasswordPage.fillFormChangePassword("123456aK*", "!@#123QWEqwe","!@#123QWEqwe");
    changePasswordPage.submit();
    browser.sleep(wait);
    changePasswordPage.ok();
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
  },40000);
});
