import depositPage from "../pages/depositPage";
import axios from "axios";

class Deposit {
  constructor() {}
  createData(email, amount, address) {
    const data = {
      Email: email,
      Amount: amount
    };
    return Object.assign(data, address);
  }

  createDepositAddress(currency) {
    browser.get("https://stage.millentrix.com/deposit");
    depositPage.selectCurrency(currency);
    const data = depositPage.copyAddress(currency);
    return data;
  }

  externalWithdrawal(symbol, data) {
    return axios
      .post("34.249.214.138:7080/wallet/external/withdrawal/", data)
      .then(res => res)
      .catch(err => err);
  }
}
export default new Deposit();
