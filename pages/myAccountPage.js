class MyAccountPage {
  constructor() {

    this.myAccountLink = element(
      by.css('a.nav-link.nav-dropdown-toggle')
    );
    this.logoutButton = element(
      by.xpath(
        "/html/body/div[1]/app-dashboard/div/div/main/div/ng-component/div[1]/div[1]/div[2]/div/button"
      )
    );

    this.generalInfoSection = element(by.css("#mat-tab-label-0-0"));
    this.paymentsMethodsSection = element(by.css("#mat-tab-label-0-1"));
    this.securitySection = element(by.css("#mat-tab-label-0-2"));
    this.verificationSection = element(by.css("#mat-tab-label-0-3"));
  }

  //methods

  myAccount() {
    this.myAccountLink.click();
  }

  logout() {
    this.logoutButton.click();
  }

  generalInfo() {
    this.generalInfoSection.click();
  }

  paymentsMethods() {
    this.paymentsMethodsSection.click();
  }

  security() {
    this.securitySection.click();
  }

  verification() {
    this.verificationSection.click();
  }
}
export default new MyAccountPage();
