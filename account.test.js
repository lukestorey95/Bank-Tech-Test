const Account = require("./account");
const Transaction = require("./transaction");
jest.mock("./transaction");

describe("Account", () => {
  beforeEach(() => {
    account = new Account();
  });

  describe("getBalance", () => {
    it("should return the balance of the account", () => {
      expect(account.getBalance()).toEqual(0);
    });
  });

  describe(".deposit", () => {
    it("should increase the balance by the amount deposited", () => {
      account.deposit(500.0);

      expect(account.balance).toEqual(500.0);
    });

    xit("should create a new transaction", () => {
      account.deposit(500.0);

      expect(Transaction).toHaveBeenCalledWith({
        deposit: 500.0,
        balance: 500.0,
      });
    });

    it("should throw an error if the amount to deposit is negative", () => {
      expect(() => account.deposit(-500.0)).toThrow(
        "Deposit failed: Amount must be positive"
      );
    });
  });

  describe(".withdraw", () => {
    it("should decrease the balance by the amount deposited", () => {
      account.deposit(500.0);
      account.withdraw(500.0);

      expect(account.balance).toEqual(0.0);
    });

    it("should throw an error if amount to withdraw is greater than current balance", () => {
      expect(() => account.withdraw(500.0)).toThrow(
        "Withdrawal failed: Insufficient funds"
      );
    });
  });
});
