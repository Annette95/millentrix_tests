import bankAccountPage from "../../pages/bankAccountPage";
import loginPage from "../../pages/loginPage";
import { $ } from "protractor";
import myAccountPage from "../../pages/myAccountPage";
import path from "path";

const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const iban = `FR${randomNumber(9)}`;
const wait = 1000;

describe("BANK20 - User uploaded too large file of bank statement file(doc)", () => {
 
  it("User fills the form and uploaded too large file(doc))", () => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    var FileToUpload = "../../helpers/files/Biletydoc.docx";
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
    expect(bankAccountPage.fileFieldValidation.getText()).toEqual(
      "Wrong file type, please select again"
    );
    browser.sleep(wait);
    myAccountPage.logout();
  });
});