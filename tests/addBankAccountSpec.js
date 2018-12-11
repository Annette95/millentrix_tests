import bankAccountPage from "../pages/bankAccountPage";
import loginPage from "../pages/loginPage";
import { $ } from "protractor";
import myAccountPage from "../pages/myAccountPage";
import path from "path";

const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const iban = `FR${randomNumber(9)}`;
const EC = protractor.ExpectedConditions;
const wait = 1000;

describe("Add bank account", () => {
  beforeEach(() => {
    browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
  });

  it("BANK01 - Successful adding the bank", () => {
    var FileToUpload = "../helpers/files/Test3MB.jpg";
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(wait);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.get("https://stage.millentrix.com/myaccount/payments/addbank");
    browser.sleep(wait);
    bankAccountPage.addBankAccount(
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
    bankAccountPage.bankNameDisplay.isPresent();
    myAccountPage.logout();
    browser.sleep(wait);
  });

  it("BANK14 - User canceled bank account adding and returned to the list of existing bank accounts", () => {
    var FileToUpload = "../helpers/files/Test3MB.jpg";
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(wait);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.get("https://stage.millentrix.com/myaccount/payments/addbank");
    browser.sleep(wait);
    bankAccountPage.addBankAccount(
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
    bankAccountPage.cancel();
    browser.wait(
      EC.urlIs("https://stage.millentrix.com/myaccount/payments"),
      60 * 1000
    );
    myAccountPage.logout();
    browser.sleep(wait);
  });

  it("BANK19 - User uploaded too large file of bank statement file(pdf)", () => {
    var FileToUpload = "../helpers/files/BigPDFBook.pdf";
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(wait);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.get("https://stage.millentrix.com/myaccount/payments/addbank");
    browser.sleep(wait);
    bankAccountPage.addBankAccount(
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
      "Max. file size (5MB) exceeded"
    );
    myAccountPage.logout();
    browser.sleep(wait);
  });

  it("BANK20 - User uploaded too large file of bank statement file(doc)", () => {
    var FileToUpload = "../helpers/files/Biletydoc.docx";
    loginPage.login("millentrix.tester@gmail.com", "!@#123QWEqwe");
    browser.sleep(wait);
    browser.refresh();
    browser.waitForAngularEnabled(false);
    browser.get("https://stage.millentrix.com/myaccount/payments/addbank");
    browser.sleep(wait);
    bankAccountPage.addBankAccount(
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
