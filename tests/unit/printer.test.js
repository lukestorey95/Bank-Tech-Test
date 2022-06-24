const Printer = require("../../src/printer");
const Transaction = require("../../src/transaction");
jest.mock("../../src/transaction");

describe("Printer", () => {
  beforeEach(() => {
    printer = new Printer();

    transaction = new Transaction();
    secondTransaction = new Transaction();

    transaction.getDate.mockImplementation(() => {
      return "19/06/2022";
    });

    transaction.getCredit.mockImplementation(() => {
      return "500.00";
    });

    transaction.getDebit.mockImplementation(() => {
      return null;
    });

    transaction.getBalance.mockImplementation(() => {
      return "500.00";
    });

    secondTransaction.getDate.mockImplementation(() => {
      return "20/06/2022";
    });

    secondTransaction.getCredit.mockImplementation(() => {
      return "500.00";
    });

    secondTransaction.getDebit.mockImplementation(() => {
      return null;
    });

    secondTransaction.getBalance.mockImplementation(() => {
      return "1000.00";
    });

    Transaction.mockClear();
  });

  describe("printStatement", () => {
    it("should return only the header if no transactions have occured", () => {
      expect(printer.printStatement([])).toEqual(
        "date || credit || debit || balance\n"
      );
    });

    it("should take an array of transaction objects and return them as a string", () => {
      expect(printer.printStatement([transaction])).toEqual(
        "date || credit || debit || balance\n19/06/2022 || 500.00 ||  || 500.00"
      );
    });

    it("should handle multiple transactions", () => {
      expect(printer.printStatement([transaction, secondTransaction])).toEqual(
        "date || credit || debit || balance\n20/06/2022 || 500.00 ||  || 1000.00\n19/06/2022 || 500.00 ||  || 500.00"
      );
    });
  });
});
