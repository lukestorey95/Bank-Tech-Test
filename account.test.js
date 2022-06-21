const Account = require("./account");
const Transaction = require("./transaction");
jest.mock("./transaction");

describe("Account", () => {
  beforeEach(() => {
    emptyAccount = new Account(Transaction);
    accountWithCash = new Account(Transaction);

    accountWithCash.deposit(500);

    Transaction.mockClear();
  });

  describe("getBalance", () => {
    it("should return the balance of the account", () => {
      expect(accountWithCash.getBalance()).toEqual(500);
    });
  });

  describe(".deposit", () => {
    it("should increase the balance by the amount deposited", () => {
      emptyAccount.deposit(500);

      expect(emptyAccount.getBalance()).toEqual(500);
    });

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
    it("should decrease the balance by the amount deposited", () => {
      accountWithCash.withdraw(250);

      expect(accountWithCash.getBalance()).toEqual(250);
    });

    it("should throw an error if amount to withdraw is greater than current balance", () => {
      expect(() => emptyAccount.withdraw(500)).toThrow(
        "Withdrawal failed: Insufficient funds"
      );
    });

    it("should create a new transaction", () => {
      accountWithCash.withdraw(250);

      expect(Transaction).toHaveBeenCalledWith({
        debit: 250,
        balance: 250,
      });
    });
  });
});
