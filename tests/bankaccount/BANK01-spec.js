import bankAccountPage from "../../pages/bankAccountPage";
import loginPage from "../../pages/loginPage";
import { $ } from "protractor";
import myAccountPage from "../../pages/myAccountPage";
import path from "path";

const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const iban = `FR${randomNumber(9)}`;
const EC = protractor.ExpectedConditions;

describe("BANK01 - Successful adding the bank", () => {
  it("User fills the form and submit the bank account", () => {
    var FileToUpload = "../../helpers/files/Test3MB.jpg";
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
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
    bankAccountPage.submit();
    browser.wait(
      EC.urlIs("https://stage.millentrix.com/myaccount/payments"),
      60 * 1000
    );
    bankAccountPage.bankNameDisplay.isPresent(); //expected result
    myAccountPage.logout();
  });
});
