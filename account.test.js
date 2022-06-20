const Account = require("./account");

describe("Account", () => {
  beforeEach(() => {
    account = new Account();
  });

  describe(".deposit", () => {
    it("should change the balance by the amount deposited", () => {
      account.deposit(500.0);

      expect(account.balance).toEqual(500.0);
    });
  });
});
