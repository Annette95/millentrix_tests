import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import menuAccount from "../../pages/menuAccount";

describe("Login Test", () => {
  it("LOG01 - Successful Login", () => {
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    expect(menuAccount.userAccountName.getText()).toEqual("Acceptance Tester");
    myAccountPage.myAccount();
    myAccountPage.logout();
  });
});
