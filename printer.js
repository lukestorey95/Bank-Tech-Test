module.exports = class Printer {
  #header = "date || credit || debit || balance";

  printStatement(transactions) {
    return this.#header + "\n" + this.#formatTransactions(transactions);
  }

  #formatTransactions(transactions) {
    return transactions.map(this.#formatTransaction).join("\n");
  }

  #formatTransaction(transaction) {
    return [
      transaction.getDate(),
      transaction.getCredit(),
      transaction.getDebit(),
      transaction.getBalance(),
    ].join(" || ");
  }
};
