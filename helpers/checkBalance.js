import axios from "axios";

const CheckBalance = function checkBalance() {
  this.getBalance = (symbol, email) =>
    axios
      .get(`34.249.214.138:7080/wallet/transaction/action/${symbol}`, {
        headers: { Email: email }
      })
      .then(res => res)
      .catch(err => err);
};
export default new CheckBalance();
