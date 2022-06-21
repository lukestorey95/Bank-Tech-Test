class Printer {
  #header = "date || credit || debit || balance";

  printTransactions(transactions) {
    return this.#header + "\n" + this.#formatTransactions(transactions);
  }

  #formatTransactions(transactions) {
    return transactions
      .map((transaction) => {
        return [
          transaction.getDate(),
          transaction.getCredit(),
          transaction.getDebit(),
          transaction.getBalance(),
        ].join(" || ");
      })
      .join("\n");
  }
}

module.exports = Printer;
