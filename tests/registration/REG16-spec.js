import registrationPage from "../../pages/registrationPage";
import loginPage from "../../pages/loginPage";
import cleanUp from "../../helpers/cleanUp";

const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const email = `millentrix.tester+${randomNumber(9)}@gmail.com`;
const password = "!@#123QWEqwe";


describe("REG16 - didn't approved email and wants to receive it repeatedly ", () => {
    afterAll(done => {
      cleanUp.clearDB(email).then(done);
    });

    it("Reg16- User fills the registration form", () => {
      browser.get("https://stage.millentrix.com/register?norecaptcha=true");
      registrationPage.registerNewUser(
        "Acceptance",
        "Tester",
        email,
        password,
        password,
        "France"
      );
      browser.sleep(2000);
      expect(registrationPage.succesfulRegistered.isPresent()).toBe(true);
    });

    it("REG16 is trying to log in without email confirmation", () => {
      browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
      loginPage.login(email, password);
      browser.sleep(2000);
      expect(loginPage.popCheckEmail.getText()).toEqual(
        "Please check your email and click the confirmation link. For getting confirmation email again click -> Confirm"
      );
      browser.sleep(500);
      loginPage.confirmEmailResend();
      expect(loginPage.signInPageDisplayed.getText()).toEqual(
        "Sign in to millentrix"
      );
    });

    it("REG16- goes by link from email box", () => {
      // mail listener start
      browser
        .wait(browser.params.getLastEmail())
        .then(({ html }) => {
          const hrefChunk = html.split('Please click the <a href="')[1];
          const url = hrefChunk.split('" style="color:#2ecc71;">link</a>')[0];
          return url;
        })
        .then(url => {
          browser.get(url);
          return browser.getCurrentUrl().then(currentUrl => {
            browser.get(`${currentUrl}&norecaptcha=true`);
            browser.sleep(3000);
          });
        });

      loginPage.closeConfPopUp();
      browser.sleep(500);
      loginPage.login(email, password);
      browser.sleep(2000);
      expect(loginPage.phoneVerificationPageDisplayed.getText()).toEqual(
        "Phone verification"
      );
    });
  });