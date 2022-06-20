const Account = require("./account");

describe("Account", () => {
  beforeEach(() => {
    account = new Account();
  });

  describe(".deposit", () => {
    it("should increase the balance by the amount deposited", () => {
      account.deposit(500.0);

      expect(account.balance).toEqual(500.0);
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
