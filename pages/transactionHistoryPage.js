class TransactionHistoryPage {
  constructor() {
    this.lastDeposit = element(
      by.xpath(
        '(//table[1]/tbody/tr[1]/td[last()][text()[contains(.,"Approved")]]'
      )
    );
    this.lastWithdraw = element(
      by.xpath(
        '(//table[2]/tbody/tr[1]/td[last()][text()[contains(.,"Approved")]]'
      )
    );
  }
}
export default new TransactionHistoryPage();
