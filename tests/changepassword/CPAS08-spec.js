import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import changePasswordPage from "../../pages/changePasswordPage";
import securityPage from "../../pages/securityPage";

const wait = 1500;

describe("CPAS08 - User makes a mistake and introduces wrong data in field 'Please enter your current password'", () => {

  it("Fills the form of changing password and makes mistake", () => {
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
    changePasswordPage.invalidCurrentPassword("123Aa!1234", "123456aK*", "123456aK*");//wrong current password is introduced
    browser.sleep(wait);
    expect(changePasswordPage.errorMessage.getText()).toEqual("Wrong password");
    changePasswordPage.cancel();
    browser.sleep(wait);
    myAccountPage.logout();
    browser.sleep(wait);
  });
});