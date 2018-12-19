import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import changePasswordPage from "../../pages/changePasswordPage";
import securityPage from "../../pages/securityPage";

describe("CPAS08 - User makes a mistake and introduces wrong data in field 'Please enter your current password'", () => {
  it("Fills the form of changing password and makes mistake", () => {
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    myAccountPage.myAccount();
    myAccountPage.security();
    securityPage.changePassword();
    changePasswordPage.fillFormChangePassword(
      "123Aa!1234",
      "123456aK*",
      "123456aK*"
    ); //wrong current password is introduced
    changePasswordPage.trySubmit();
    expect(changePasswordPage.errorMessage.getText()).toEqual("Wrong password");
    changePasswordPage.cancel();
    changePasswordPage.refresh();
    myAccountPage.logout();
  });
});
