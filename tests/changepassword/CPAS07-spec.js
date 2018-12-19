import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import changePasswordPage from "../../pages/changePasswordPage";
import securityPage from "../../pages/securityPage";

describe("CPAS07 - User makes a mistake and introduces wrong data in field 'Verify new password'", () => {
  it("Fills the form of changing password and makes mistake", () => {
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    myAccountPage.myAccount();
    myAccountPage.security();
    securityPage.changePassword();
    changePasswordPage.fillFormChangePassword(
      "!@#123QWEqwe",
      "123456aK*",
      "123456aK*1111"
    ); //wrong password is introduced
    changePasswordPage.trySubmit();
    expect(changePasswordPage.errorMessage.getText()).toEqual(
      "Password not matched"
    );
    changePasswordPage.cancel();
    changePasswordPage.refresh();
    myAccountPage.logout();
  });
});
