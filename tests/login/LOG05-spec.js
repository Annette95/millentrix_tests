import loginPage from "../../pages/loginPage";

describe("Login Test", () => {

  it("LOG05 - User made a mistake introducing password", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "1111!@#123QWEqwe"); //invalid password 
    browser.sleep(1000);
    expect(loginPage.textInvalidInformationDisplay.getText()).toEqual("Invalid user information"); 
  });
});
