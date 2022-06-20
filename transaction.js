class Transaction {
  constructor({ credit = null, debit = null, balance = null } = {}) {
    this.date = new Date(Date.now()).toLocaleDateString();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  print() {
    return [
      this.date,
      this.#formatCurrency(this.credit),
      this.#formatCurrency(this.debit),
      this.#formatCurrency(this.balance),
    ].join(" || ");
  }

  #formatCurrency(amount) {
    if (amount) {
      return amount.toFixed(2);
    } else {
      return amount;
    }
  }
}

module.exports = Transaction;
