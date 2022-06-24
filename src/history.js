module.exports = class History {
  #transaction;
  #transactions = [];

  constructor(transaction) {
    this.#transaction = transaction;
  }

  getBalance() {
    if (this.#transactions[this.#transactions.length - 1]) {
      return this.#transactions[this.#transactions.length - 1].getBalance();
    } else return 0;
  }

  getTransactions() {
    return this.#transactions;
  }

  newTransaction(amount) {
    let creditOrDebit;
    let transaction;

    if (amount > 0) creditOrDebit = { credit: amount };
    else creditOrDebit = { debit: -amount };

    transaction = new this.#transaction({
      ...creditOrDebit,
      balance: this.getBalance() + amount,
    });

    this.#transactions.push(transaction);
  }
};
