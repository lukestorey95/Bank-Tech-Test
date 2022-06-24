const Account = require("./account");
const Transaction = require("./transaction");
const Printer = require("./printer");
jest.mock("./transaction");
jest.mock("./printer");

describe("Account", () => {
  beforeEach(() => {
    printer = new Printer();

    emptyAccount = new Account(Transaction, printer);
    accountWithCash = new Account(Transaction, printer);

    accountWithCash.deposit(500);

    Printer.mockClear();
    Transaction.mockClear();
  });

  describe("getBalance", () => {
    it("should call the latest transaction for the current balance", () => {
      const spy = jest.spyOn(Transaction.prototype, "getBalance");

      accountWithCash.getBalance();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe(".deposit", () => {
    it("should create a new transaction", () => {
      emptyAccount.deposit(500);

      expect(Transaction).toHaveBeenCalledWith({
        credit: 500,
        balance: 500,
      });
    });

    it("should throw an error if the amount to deposit is negative", () => {
      expect(() => emptyAccount.deposit(-500)).toThrow(
        "Deposit failed: Amount must be positive"
      );
    });
  });

  describe(".withdraw", () => {
    it("should throw an error if amount to withdraw is greater than current balance", () => {
      expect(() => emptyAccount.withdraw(500)).toThrow(
        "Withdrawal failed: Insufficient funds"
      );
    });

    it("should create a new transaction", () => {
      jest.spyOn(Transaction.prototype, "getBalance").mockImplementation(() => {
        return 500;
      });

      accountWithCash.withdraw(250);

      expect(Transaction).toHaveBeenCalledWith({
        debit: 250,
        balance: 250,
      });
    });
  });

  describe("printStatement", () => {
    it("should instruct printer to print a statement", () => {
      emptyAccount.printStatement();

      expect(printer.printStatement).toHaveBeenCalledWith([]);
    });
  });
});
