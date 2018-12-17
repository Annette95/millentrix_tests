import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import menuAccount from "../../pages/menuAccount";

describe("Login Test", () => {

  it("LOG01 - Successful Login", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(2000);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.sleep(2000);
    expect(menuAccount.userAccountName.getText()).toEqual("Acceptance Tester");
    myAccountPage.myAccount();
    browser.sleep(2000);
    myAccountPage.logout();
    browser.sleep(2000);
  });

});
