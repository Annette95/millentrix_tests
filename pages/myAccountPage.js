class MyAccountPage {
  constructor() {
    this.myAccountLink = element(
      by.xpath("/html/body/div[1]/app-dashboard/div/div/div/nav/ul/li[8]/a")
    );
    this.logoutButton = element(
      by.xpath(
        "/html/body/div[1]/app-dashboard/div/div/main/div/ng-component/div[1]/div[1]/div[2]/div/button"
      )
    );
  }

  //methods

  myAccount() {
    this.myAccountLink.click();
  }

  logout() {
    this.logoutButton.click();
  }
}
export default new MyAccountPage();
