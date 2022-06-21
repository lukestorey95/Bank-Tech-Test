const Printer = require("./printer");
const Transaction = require("./transaction");
jest.mock("./transaction");

describe("Printer", () => {
  beforeEach(() => {
    printer = new Printer();

    transaction = new Transaction({ credit: 500, balance: 1000 });

    transaction.getDate.mockImplementation(() => {
      return "20/06/2022";
    });

    transaction.getCredit.mockImplementation(() => {
      return "500.00";
    });

    transaction.getDebit.mockImplementation(() => {
      return null;
    });

    transaction.getBalance.mockImplementation(() => {
      return "1000.00";
    });

    Transaction.mockClear();
  });

  describe("printTransactions", () => {
    it("should return only the header if no transactions have occured", () => {
      expect(printer.printTransactions([])).toEqual(
        "date || credit || debit || balance\n"
      );
    });

    it("should take an array of transaction objects and return them as a string", () => {
      expect(printer.printTransactions([transaction])).toEqual(
        "date || credit || debit || balance\n20/06/2022 || 500.00 ||  || 1000.00"
      );
    });

    it("should handle multiple transaction objects", () => {
      expect(printer.printTransactions([transaction, transaction])).toEqual(
        "date || credit || debit || balance\n20/06/2022 || 500.00 ||  || 1000.00\n20/06/2022 || 500.00 ||  || 1000.00"
      );
    });
  });
});
