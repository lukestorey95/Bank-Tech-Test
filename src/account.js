module.exports = class Account {
  #transactions = [];
  #transaction;
  #printer;

  constructor(transaction, printer) {
    this.#transaction = transaction;
    this.#printer = printer;
  }

  getBalance() {
    if (this.#transactions[this.#transactions.length - 1]) {
      return this.#transactions[this.#transactions.length - 1].getBalance();
    } else return 0;
  }

  deposit(amount) {
    this.#checkDepositValue(amount);
    this.#transactions.push(
      new this.#transaction({
        credit: amount,
        balance: this.getBalance() + amount,
      })
    );
  }

  withdraw(amount) {
    this.#checkSufficientFunds(amount);
    this.#transactions.push(
      new this.#transaction({
        debit: amount,
        balance: this.getBalance() - amount,
      })
    );
  }

  printStatement() {
    return this.#printer.printStatement(this.#transactions);
  }

  #checkSufficientFunds(amount) {
    if (amount > this.getBalance()) throw "Withdraw failed: Insufficient funds";
  }

  #checkDepositValue(amount) {
    if (amount <= 0) throw "Deposit failed: Amount must be positive";
  }
};
