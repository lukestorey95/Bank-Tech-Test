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
    creditTransaction = new Transaction({ credit: 500, balance: 500 });

    debitTransaction = new Transaction({ debit: 500, balance: 500 });
  });

  describe("getDate", () => {
    it("should return the date formatted as a string", () => {
      expect(creditTransaction.getDate()).toEqual("20/06/2022");
    });
  });

  // describe("getCredit", () => {
  //   it("should return the credit amount formatted as a float to 2 decimals", () => {
  //     expect(creditTransaction.getCredit()).toEqual(500.0);
  //   });
  // });

  // describe("print", () => {
  //   it("should return the date, credit amount and balance amount", () => {
  //     const transaction = new Transaction({ credit: 500, balance: 500 });

  //     expect(transaction.print()).toEqual("20/06/2022 || 500.00 ||  || 500.00");
  //   });

  //   it("should return the date, debit amount and balance amount", () => {
  //     const transaction = new Transaction({ debit: 500, balance: 500 });

  //     expect(transaction.print()).toEqual("20/06/2022 ||  || 500.00 || 500.00");
  //   });
  // });
});
