const History = require("../../src/history");
const Transaction = require("../../src/transaction");

jest.mock("../../src/transaction");

describe("History", () => {
  beforeEach(() => {
    history = new History(Transaction);

    Transaction.mockClear();
  });

  describe("getBalance", () => {
    it("should return 0 if no transactions have been made ", () => {
      expect(history.getBalance()).toEqual(0);
    });

    it("should call the most recent transaction for the balance", () => {
      history.newTransaction(50);
      history.getBalance();

      expect(Transaction.prototype.getBalance).toHaveBeenCalledTimes(1);
    });
  });

  describe("getTransactions", () => {
    it("should return an array of transactions", () => {
      history.newTransaction(50);
      expect(history.getTransactions()[0]).toBeInstanceOf(Transaction);
    });
  });

  describe("newTransaction", () => {
    it("should create a new transaction for a credit", () => {
      history.newTransaction(50);

      expect(Transaction).toHaveBeenCalledWith({ credit: 50, balance: 50 });
    });

    it("should create a new transaction for a debit", () => {
      history.newTransaction(-50);

      expect(Transaction).toHaveBeenCalledWith({ debit: 50, balance: -50 });
    });
  });
});
