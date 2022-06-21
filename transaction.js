class Transaction {
  #date = new Date(Date.now()).toLocaleDateString();
  #credit;
  #debit;
  #balance;

  constructor({ credit = null, debit = null, balance = null } = {}) {
    this.#credit = credit;
    this.#debit = debit;
    this.#balance = balance;
  }

  getDate() {
    return this.#date;
  }

  getCredit() {
    return this.#formatCurrency(this.#credit);
  }

  // print() {
  //   return [
  //     this.#date,
  //     this.#formatCurrency(this.#credit),
  //     this.#formatCurrency(this.#debit),
  //     this.#formatCurrency(this.#balance),
  //   ].join(" || ");
  // }

  #formatCurrency(amount) {
    if (amount) {
      return amount.toFixed(2);
    } else {
      return amount;
    }
  }
}

module.exports = Transaction;
