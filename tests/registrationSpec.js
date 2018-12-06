import registrationPage from "../pages/registrationPage";
import loginPage from "../pages/loginPage";
import cleanUp from'../helpers/cleanUp';

//const waitForSMS = 10000; // delay of sms receiving, will be set 1 min
const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const email = `millentrix.tester+${randomNumber(9)}@gmail.com`;
const password = "!@#123QWEqwe";

describe("REG01-Successful Registration", () => {
//   afterAll((done) => {
//       const cleanUp = new CleanUp();
//       cleanUp.cleanDB(email).then(done);
//   });

  beforeEach(() => {
    browser.get("https://stage.millentrix.com/register?norecaptcha=true");
  });

  it("fill the form and send email", () => {
    registrationPage.registerNewUser(
      "Acceptance",
      "Tester",
      email,
      password,
      password,
      "France"
    );
    browser.sleep(3000);
  });

  it("goes by link from email box and confirm phone", () => {
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
          browser.refresh();
          browser.sleep(3000);
        });
      });

    //loginPage.clickCanvas(15, 15);
    loginPage.closeConfPopUp();
//     loginPage.login(email, password);
//     browser.sleep(2000); // in order to wait for country prefix
//     registrationPage.phoneVerify('644648536');
//     browser.sleep(waitForSMS);
//     const getCode = () =>
//       fetch("http://34.249.214.138:7080/sms/latest")
//         .then(res => res.json())
//         .then(json => json.body && json.body.slice(-6))
//         .then(str => registerPage.codeInput.sendKeys(str))
//         .catch(err => console.log("errSms :", err));
//     browser.call(getCode);

//     browser.waitForAngularEnabled(false);
//     registerPage.sendCode();

//     const EC = protractor.ExpectedConditions;
//     browser.wait(EC.urlContains("dashboard"), 10000);
//   });
});
