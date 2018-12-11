import loginPage from "../pages/loginPage";
import myAccountPage from "../pages/myAccountPage";
import menuAccount from "../pages/menuAccount";
import registrationPage from "../pages/registrationPage";

describe("Login Test", () => {
  beforeEach(() => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
  });

  it("LOG01 - Successful Login", () => {
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

  it("LOG12 - Sign up redirects to registration page", () => {
    browser.sleep(2000);
    loginPage.signUp();
    browser.sleep(2000);
    expect(registrationPage.registrationPageIsDisplayed.getText()).toEqual(
      "Open a Millentrix Account"
    );
  });
});
