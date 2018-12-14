import registrationPage from "../../pages/registrationPage";
import loginPage from "../../pages/loginPage";
import cleanUp from "../../helpers/cleanUp";
import fetch from "node-fetch";

//TODO: TELEPHONE NUMBER SHOULD BE ACCEPTED SEVERAL TIMES - flow REG01

const waitForSMS = 15000; // delay of sms receiving, will be set 1 min
const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const password = "!@#123QWEqwe";
const EC = protractor.ExpectedConditions;

describe(" REG01 - Successful Registration ", () => {
  const email = `millentrix.tester+${randomNumber(9)}@gmail.com`;
  afterAll(done => {
    cleanUp.clearDB(email).then(done);
  });

  xit("REGO1 - user fills the form and email is sent", () => {
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
    browser.waitForAngularEnabled(false);
    expect(registrationPage.succesfulRegistered.isPresent()).toBe(true);
  });

  xit("REG01 - user goes by link from email box and confirm phone", () => {
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
    registrationPage.phoneVerify("644648536");
    browser.sleep(waitForSMS);
    const getCode = () =>
      fetch("http://34.249.214.138:7080/sms/latest")
        .then(res => res.json())
        .then(json => json.body && json.body.slice(-6))
        .then(str => registrationPage.setCode(str))
        .catch(err => console.log("errSms :", err));
    browser.call(getCode);
    browser.sleep(2000);
    registrationPage.sendCode();
    browser.sleep(2000);
    expect(EC.urlContains("dashboard"), 10000).toBe(true); //expected result
  });
});
