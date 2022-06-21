const Transaction = require("./transaction");

describe("Transaction", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-06-20"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    creditTransaction = new Transaction({ credit: 500, balance: 1000 });

    debitTransaction = new Transaction({ debit: 500, balance: 1000 });
  });

  describe("getDate", () => {
    it("should return the date formatted as a string", () => {
      expect(creditTransaction.getDate()).toEqual("20/06/2022");
    });
  });

  describe("getCredit", () => {
    it("should return the credit amount formatted as a float to 2 decimals", () => {
      expect(creditTransaction.getCredit()).toEqual("500.00");
    });
  });

  describe("getDebit()", () => {
    it("should return the debt amount formatted as a float to 2 decimals", () => {
      expect(debitTransaction.getDebit()).toEqual("500.00");
    });
  });

  describe("getBalance()", () => {
    it("should return the balance amount formatted as a float to 2 decimals", () => {
      expect(debitTransaction.getBalance()).toEqual("1000.00");
    });
  });
});
