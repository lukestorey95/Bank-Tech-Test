const Account = require("./account");
const Transaction = require("./transaction");
const Printer = require("./printer");

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2022-06-20"));
});

afterAll(() => {
  jest.useRealTimers();
});

xit("should allow deposits, withdrawals and be able to print statement showing those transactions", () => {
  const account = new Account(Transaction, new Printer());

  account.deposit(100);
  account.withdraw(50);
  account.deposit(150);
  account.withdraw(25);

  console.log(account.printStatement());

  expect(account.printStatement()).toEqual(
    "date || credit || debit || balance\n20/06/2022 ||  || 25.00 || 175.00\n20/06/2022 || 150.00 ||  || 200.00\n20/06/2022 ||  || 50.00 || 50.00\n20/06/2022 || 100.00 ||  || 100.00"
  );
});
