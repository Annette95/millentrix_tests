import loginPage from "../../pages/loginPage";

describe("Login Test", () => {

  it("LOG04 - User made a mistake introducing email", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester+1111@gmail.com", "!@#123QWEqwe"); //invalid email
    browser.sleep(1000);
    expect(loginPage.textInvalidInformationDisplay.getText()).toEqual("Invalid user information"); 
  });
});
