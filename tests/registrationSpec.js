import '../pages/registrationPage';
import '../helpers/cleanUP';
import '../page/loginPage';

const waitForSMS = 10000; // delay of sms receiving, will be set 1 min
const randomNumber = length => (
  Math.floor((10 ** (length - 1)) + Math.random() * 9 * (10 ** (length - 1)))
);
const email = `millentrix.tester+${randomNumber(9)}@gmail.com`;
const password = '!@#123QWEqwe';

describe("Registration Test",  () => {
    afterAll((done) => {
        const cleanUp = new cleanUp();
        cleanUp.cleanDB(email).then(done);
    });
    beforeEach (() => {
        registrationPage.goto();
    });

    
    it("REG_01-Successful Registration",  () => {
        
        registrationPage.firstNameInput('Acceptance');
        registrationPage.lastNameInput('Tester');
       // registrationPage.

        
        //expect(login_page.userAccountName.getText()).toEqual('Acceptance Tester');
       // expect(login_page.userAccountNumber.getText()).toContain('Account No: 68478');

    });
});