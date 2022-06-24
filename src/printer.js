module.exports = class Printer {
  #header = "date || credit || debit || balance";

  printStatement(transactions) {
    return this.#header + "\n" + this.#formatTransactions(transactions);
  }

  #formatTransactions(transactions) {
    return transactions
      .reverse()
      .map(this.#getTransactionData)
      .map(this.#formatTransactionData)
      .join("\n");
  }

  #getTransactionData(transaction) {
    return [
      transaction.getDate(),
      transaction.getCredit(),
      transaction.getDebit(),
      transaction.getBalance(),
    ];
  }

  #formatTransactionData(entries) {
    return entries
      .map((entry) => {
        if (typeof entry == "number") return entry.toFixed(2);
        else return entry;
      })
      .join(" || ");
  }
};
