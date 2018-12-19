import loginPage from "../../pages/loginPage";

describe("Login Test", () => {
  it("LOG04 - User made a mistake introducing email", () => {
    loginPage.negativeLogin("millentrix.tester+1111@gmail.com", "!@#123QWEqwe"); //invalid email
    expect(loginPage.textInvalidInformationDisplay.getText()).toEqual(
      "Invalid user information"
    );
  });
});
