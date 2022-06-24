module.exports = class Account {
  #printer;
  #history;

  constructor(printer, history) {
    this.#printer = printer;
    this.#history = history;
  }

  getBalance() {
    return this.#history.getBalance();
  }

  deposit(amount) {
    this.#checkDepositValue(amount);
    this.#history.newTransaction(amount);
  }

  withdraw(amount) {
    this.#checkSufficientFunds(amount);
    this.#history.newTransaction(-amount);
  }

  printStatement() {
    return this.#printer.printStatement(this.#history.getTransactions());
  }

  #checkSufficientFunds(amount) {
    if (amount > this.getBalance()) throw "Withdraw failed: Insufficient funds";
  }

  #checkDepositValue(amount) {
    if (amount <= 0) throw "Deposit failed: Amount must be positive";
  }
};
