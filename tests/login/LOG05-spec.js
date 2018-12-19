import loginPage from "../../pages/loginPage";

describe("Login Test", () => {
  it("LOG05 - User made a mistake introducing password", () => {
    loginPage.negativeLogin("millentrix.tester@gmail.com", "1111!@#123QWEqwe"); //invalid password
    expect(loginPage.textInvalidInformationDisplay.getText()).toEqual(
      "Invalid user information"
    );
  });
});
