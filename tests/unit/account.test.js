const Account = require("../../src/account");
const History = require("../../src/history");
const Printer = require("../../src/printer");
jest.mock("../../src/history");
jest.mock("../../src/printer");

describe("Account", () => {
  beforeEach(() => {
    printer = new Printer();
    history = new History();

    account = new Account(printer, history);

    Printer.mockClear();
    History.mockClear();
  });

  describe("getBalance", () => {
    it("should instruct history to get the latest balance", () => {
      account.getBalance();

      expect(history.getBalance).toHaveBeenCalledTimes(1);
    });
  });

  describe(".deposit", () => {
    it("should instruct history to create a new transaction", () => {
      account.deposit(500);

      expect(history.newTransaction).toHaveBeenCalledWith(500);
    });

    it("should throw an error if the amount to deposit is negative", () => {
      expect(() => account.deposit(-500)).toThrow(
        "Deposit failed: Amount must be positive"
      );
    });
  });

  describe(".withdraw", () => {
    it("should throw an error if amount to withdraw is greater than current balance", () => {
      history.getBalance.mockImplementation(() => {
        return 0;
      });

      expect(() => account.withdraw(500)).toThrow(
        "Withdraw failed: Insufficient funds"
      );
    });

    it("should instruct history to create a new transaction", () => {
      history.getBalance.mockImplementation(() => {
        return 500;
      });

      account.withdraw(250);

      expect(history.newTransaction).toHaveBeenCalledWith(-250);
    });
  });

  describe("printStatement", () => {
    it("should instruct printer to print a statement with the history of transactions", () => {
      account.printStatement();

      expect(printer.printStatement).toHaveBeenCalledWith(
        history.getTransactions()
      );
    });
  });
});
