class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.checkDepositValue(amount);

    this.balance += amount;
  }

  withdraw(amount) {
    this.checkSufficientFunds(amount);

    this.balance -= amount;
  }

  checkSufficientFunds(amount) {
    if (amount > this.balance) {
      throw "Withdrawal failed: Insufficient funds";
    }
  }

  checkDepositValue(amount) {
    if (amount <= 0) {
      throw "Deposit failed: Amount must be positive";
    }
  }
}

module.exports = Account;
