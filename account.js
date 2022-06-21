class Account {
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
    this.#generateTransaction({ credit: amount });
  }

  withdraw(amount) {
    this.#checkSufficientFunds(amount);
    this.#balance -= amount;
    this.#generateTransaction({ debit: amount });
  }

  printStatement() {
    this.#printer.printTransactions(this.#transactions);
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
    new this.#transaction(creditOrDebit);
  }
}

module.exports = Account;
