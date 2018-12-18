import loginPage from "../../pages/loginPage";

describe("Login Test", () => {

  it("LOG11 - User tries to enter platform when his country is restricted ", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester+222@gmail.com", "123123Aa!"); //data of user whose country is restricted
    browser.sleep(1000);
    expect(loginPage.restrictedCountry.getText()).toEqual("Service Not Supported"); 
  });
});
