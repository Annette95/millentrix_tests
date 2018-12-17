class MenuPage {
  constructor() {
    this.userAccountName = element(by.css("div.fullname"));
    this.dashboardItem = element(by.css('a[href="/dashboard"]'));
    this.buySellItem = element(by.css('li a[href="/trading"]'));
    this.balancesItem = element(by.css('a[href="/balances"]'));
    this.depositItem = element(by.css('a[href="/deposit"]'));
    this.withdrawItem = element(by.css('a[href="/withdraw"]'));
    this.transactionHistorydItem = element(
      by.css('a[href="/transactionhistory"]')
    );
    this.tradingHistoryItem = element(by.css('a[href="/tradinghistory"]'));
    //  this.supportItem = elemet(by.css('a[href="https://support.millentrix.com/hc/en-us/requests/new]'));
  }

  //methods

  dashboard() {
    this.dashboardItem.click();
  }

  buySell() {
    this.buySellItem.click();
  }

  balances() {
    this.balancesItem.click();
  }

  deposit() {
    this.depositItem.click();
  }

  withdraw() {
    this.withdrawItem.click();
  }

  transactionHistory() {
    this.tradingHistoryItem.click();
  }

  tradingHistory() {
    this.tradingHistoryItem.click();
  }

  support() {
    this.supportItem.click();
  }
}
export default new MenuPage();
