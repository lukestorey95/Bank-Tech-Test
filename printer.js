class Printer {
  #header = "date || credit || debit || balance";

  printStatement(transactions) {
    const output = this.#header + "\n" + this.#formatTransactions(transactions);

    console.log(output);

    return output;
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
}

module.exports = Printer;
