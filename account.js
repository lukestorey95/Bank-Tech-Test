const Transaction = require("./transaction");

class Account {
  #balance;
  #transaction;

  constructor() {
    this.#balance = 0;
    this.#transaction = Transaction;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#checkDepositValue(amount);

    this.#balance += amount;

    new this.#transaction({ credit: amount, balance: this.#balance });
  }

  withdraw(amount) {
    this.#checkSufficientFunds(amount);

    this.#balance -= amount;

    new this.#transaction({ debit: amount, balance: this.#balance });
  }

  #checkSufficientFunds(amount) {
    if (amount > this.#balance) {
      throw "Withdrawal failed: Insufficient funds";
    }
  }

  #checkDepositValue(amount) {
    if (amount <= 0) {
      throw "Deposit failed: Amount must be positive";
    }
  }
}

module.exports = Account;
