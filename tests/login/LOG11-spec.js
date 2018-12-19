import loginPage from "../../pages/loginPage";

describe("Login Test", () => {
  it("LOG11 - User tries to enter platform when his country is restricted ", () => {
    loginPage.negativeLogin("millentrix.tester+222@gmail.com", "123123Aa!"); //data of user whose country is restricted
    expect(loginPage.restrictedCountry.getText()).toEqual(
      "Service Not Supported"
    );
  });
});
