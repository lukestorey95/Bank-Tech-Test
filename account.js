module.exports = class Account {
  #balance = 0;
  #transactions = [];
  #transaction;
  #printer;

  constructor(transaction, printer) {
    this.#transaction = transaction;
    this.#printer = printer;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#checkDepositValue(amount);
    this.#balance += amount;
    this.#transactions.push(this.#generateTransaction({ credit: amount }));
  }

  withdraw(amount) {
    this.#checkSufficientFunds(amount);
    this.#balance -= amount;
    this.#transactions.push(this.#generateTransaction({ debit: amount }));
  }

  printStatement() {
    return this.#printer.printStatement(this.#transactions);
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

  #generateTransaction(creditOrDebit) {
    creditOrDebit.balance = this.#balance;
    return new this.#transaction(creditOrDebit);
  }
};
