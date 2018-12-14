import bankAccountPage from "../../pages/bankAccountPage";
import loginPage from "../../pages/loginPage";
import { $ } from "protractor";
import myAccountPage from "../../pages/myAccountPage";
import path from "path";

const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const iban = `FR${randomNumber(9)}`;
const EC = protractor.ExpectedConditions;
const wait = 1000;

describe("BANK01 - Successful adding the bank", () => {

  it("User fills the form and submit the bank account", () => {
    var FileToUpload = "../../helpers/files/Test3MB.jpg";
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(wait);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.get("https://stage.millentrix.com/myaccount/payments/addbank");
    browser.sleep(wait);
    bankAccountPage.fillForm(
      "Mobias",
      "789456456",
      iban,
      "333333",
      "MAIB",
      "StefanCelMare",
      "Moldova"
    );
    var absolutePath = path.resolve(__dirname, FileToUpload);
    $('input[type="file"]').sendKeys(absolutePath);
    browser.sleep(wait);
    bankAccountPage.submit();
    browser.wait(
      EC.urlIs("https://stage.millentrix.com/myaccount/payments"),
      60 * 1000
    );
    browser.sleep(wait);
    bankAccountPage.bankNameDisplay.isPresent(); //expected result
    myAccountPage.logout();
  });
});
