import registrationPage from '../pages/registrationPage';

//import CleanUP from'../helpers/cleanUP';
//import LoginPage from'../page/loginPage';

//const waitForSMS = 10000; // delay of sms receiving, will be set 1 min
const randomNumber = length => (
    Math.floor((10 ** (length - 1)) + Math.random() * 9 * (10 ** (length - 1)))
);
const email = `millentrix.tester+${randomNumber(9)}@gmail.com`;
const password = '!@#123QWEqwe';

describe("Registration Test", () => {
    // afterAll((done) => {
    //     this.CleanUP = new cleanUp();
    //     cleanUp.cleanDB(email).then(done);
    // });

    beforeEach(() => {
        browser.get("https://stage.millentrix.com/register?norecaptcha=true");
    });


    it("REG_01-Successful Registration", () => {
        // registrationPage.registerNewUser('AA', 'AA', email, password, '1111');
        //  expect(browser.getTitle()).toContain('Millentrix');


        registrationPage.setFirstName('Acceptance');
        // registrationPage.setLastName('Tester');
        // registrationPage.setEmail(email);
        // registrationPage.setPasswod(password);
        // registrationPage.setRepeatPassword(password);
        // registrationPage.chooseCountry('France');

        // registrationPage.answerUsCitizen('No');
        // registrationPage.answerUsRezident('No');
        // registrationPage.answerUsTaxPerson('No');

        // registrationPage.checkTermsAndCondition();
        // registrationPage.checkLegalAge();
        // browser.sleep(2000);


        // registrationPage.


        //expect(login_page.userAccountName.getText()).toEqual('Acceptance Tester');
        // expect(login_page.userAccountNumber.getText()).toContain('Account No: 68478');

    });
});