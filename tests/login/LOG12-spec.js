import loginPage from "../../pages/loginPage";
import registrationPage from "../../pages/registrationPage";

describe("Login Test", () => {

  it("LOG12 - Sign up redirects to registration page", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    browser.sleep(2000);
    loginPage.signUp();
    browser.sleep(2000);
    expect(registrationPage.registrationPageIsDisplayed.getText()).toEqual(
      "Open a Millentrix Account"
    );
  });
});