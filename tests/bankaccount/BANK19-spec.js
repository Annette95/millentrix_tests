import bankAccountPage from "../../pages/bankAccountPage";
import loginPage from "../../pages/loginPage";
import { $ } from "protractor";
import myAccountPage from "../../pages/myAccountPage";
import path from "path";

const randomNumber = length =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));
const iban = `FR${randomNumber(9)}`;

describe("BANK19 - User uploaded too large file of bank statement file(pdf)", () => {
  it("User fills the form and uploaded too large file(pdf)", () => {
    var FileToUpload = "../../helpers/files/BigPDFBook.pdf";
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
    expect(bankAccountPage.fileFieldValidation.getText()).toEqual(
      "Max. file size (5MB) exceeded"
    ); //expected result
    myAccountPage.logout();
  });
});
