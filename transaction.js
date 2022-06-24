module.exports = class Transaction {
  #date = new Date(Date.now()).toLocaleDateString();
  #credit;
  #debit;
  #balance;

  constructor({ credit = null, debit = null, balance = null } = {}) {
    [this.#credit, this.#debit, this.#balance] = [credit, debit, balance];
  }

  getDate() {
    return this.#date;
  }

  getCredit() {
    return this.#formatCurrency(this.#credit);
  }

  getDebit() {
    return this.#formatCurrency(this.#debit);
  }

  getBalance() {
    return this.#formatCurrency(this.#balance);
  }

  #formatCurrency(amount) {
    if (amount) return amount.toFixed(2);
    else return amount;
  }
};
