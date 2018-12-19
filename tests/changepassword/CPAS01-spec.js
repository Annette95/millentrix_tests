import loginPage from "../../pages/loginPage";
import myAccountPage from "../../pages/myAccountPage";
import changePasswordPage from "../../pages/changePasswordPage";
import securityPage from "../../pages/securityPage";
import menuAccount from "../../pages/menuAccount";

describe("CPAS01 - User successfully changed password", () => {
  it("Change password  ", () => {
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    myAccountPage.myAccount();
    myAccountPage.security();
    securityPage.changePassword();
    changePasswordPage.fillFormChangePassword(
      "!@#123QWEqwe",
      "123456aK*",
      "123456aK*"
    );
    changePasswordPage.submit();
    changePasswordPage.refresh();
    myAccountPage.logout();
    loginPage.login("millentrix.tester@gmail.com", "123456aK*");
    expect(menuAccount.userAccountName.getText()).toEqual("Acceptance Tester");
    myAccountPage.myAccount();
    myAccountPage.logout();
  });

  it("Change password Back ", () => {
    loginPage.login("millentrix.tester@gmail.com", "123456aK*");
    myAccountPage.myAccount();
    myAccountPage.security();
    securityPage.changePassword();
    changePasswordPage.fillFormChangePassword(
      "123456aK*",
      "!@#123QWEqwe",
      "!@#123QWEqwe"
    );
    changePasswordPage.submit();
    changePasswordPage.refresh();
    myAccountPage.logout();
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    expect(menuAccount.userAccountName.getText()).toEqual("Acceptance Tester");
    myAccountPage.myAccount();
    myAccountPage.logout();
  });
});
