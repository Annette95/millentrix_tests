import loginPage from '../pages/loginPage';

describe("Login Test",  () => {

    beforeEach (  () => {
        browser.get("https://stage.millentrix.com/login/auth?norecaptcha=true");
    });
    
    it("Successful Login", () => {
        
        loginPage.login('millentrix.tester@gmail.com', '!@#123QWEqwe')
        browser.sleep(2000);
        browser.refresh();
        browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        expect(loginPage.userAccountName.getText()).toEqual('Acceptance Tester');
       // expect(loginPage.userAccountNumber.getText()).toContain('Account No: 68478');

    });

    // it('Login with unverified email',() => {

    // });

    // it ('Sign up redirects to registration page', ()=> {
    //     loginPage.signUp();
    //    // browser.sleep(2000);
    //     expect(loginPage.registrationPageIsDisplayed.getText()).toEqual('Open a Millentrix Account');
    
    // });


});

