const Transaction = require("./transaction");

describe("Transaction", () => {
  describe("print", () => {
    it("should return the date, credit amount and balance amount", () => {
      const transaction = new Transaction({ credit: 500.0, balance: 500.0 });

      expect(transaction.print()).toEqual(
        `${new Date(Date.now()).toLocaleDateString()} || 500.00 ||  || 500.00`
      );
    });

    it("should return the date, debit amount and balance amount", () => {
      const transaction = new Transaction({ debit: 500.0, balance: 500.0 });

      expect(transaction.print()).toEqual(
        `${new Date(Date.now()).toLocaleDateString()} ||  || 500.00 || 500.00`
      );
    });
  });
});
