import registrationPage from "../../pages/registrationPage";
import loginPage from "../../pages/loginPage";
import cleanUp from "../../helpers/cleanUp";

const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const password = "!@#123QWEqwe";
const email = `millentrix.tester+${randomNumber(9)}@gmail.com`;

describe("REG15 - User tried to register with existing phone number ", () => {
    afterAll(done => {
      cleanUp.clearDB(email).then(done);
    });

    it("REG15 User fills the registration form", () => {
      browser.get("https://stage.millentrix.com/register?norecaptcha=true");
      registrationPage.registerNewUser(
        "Acceptance",
        "Tester",
        email,
        password,
        password,
        "Moldova"
      );
      browser.waitForAngularEnabled(false);
      browser.sleep(2000);
      expect(registrationPage.succesfulRegistered.getText()).toEqual(
        "Success!"
      );
    });

    it("REG15- user goes by link from email box and it trying to confirm phone", () => {
      //mail listener start
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
      browser.sleep(2000);
      loginPage.login(email, password);
      browser.sleep(2000); // in order to wait for country prefix
      registrationPage.phoneVerify("78081512"); //Anna's telephone number
      registrationPage.sendCode();
      browser.sleep(500);
      expect(registrationPage.duplicatePhoneNumber.getText()).toEqual(
        "Duplicate phone number"
      ); //expected result
    });
  });