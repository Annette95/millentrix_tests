import axios from "axios";
import withdrawPage from "../pages/withdrawPage";

const Withdraw = function withdraw() {
  this.createData = function createData(email, amount, currency) {
    const data = {
      Email: email,
      Symbol: currency,
      Amount: amount
    };
    return data;
  };

  this.getExternalAddress = symbol =>
    axios
      .get(`34.249.214.138:7080/wallet/${symbol}/externaladdress`)
      .then(res => res)
      .catch(err => err);

  this.addMoney = data =>
    axios
      .post("34.249.214.138:7080/user/addmoney", data)
      .then(res => res)
      .catch(err => err);

  this.withdrawToAddress = (currency, data, amount) => {
    withdrawPage.selectCurrency(currency);
    withdrawPage.enterAddress(currency, data);
    withdrawPage.enterWithdrawAmount(amount);
    withdrawPage.submit();
  };
};
export default new Withdraw();
