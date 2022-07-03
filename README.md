# Bank-Tech-Test

This is a practice Tech Test, to demonstrate writing clean code, that follows good object orientated design in vanilla Javascript. It runs in node and allows the user to make a depost or withdrawal and see a printed statement of transactions. The code has 100% code coverage and is split into multiple clases all tested in isolation utilizing Jest class mocks.

## Requirements

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)

Deposits, withdrawal.

Account statement (date, amount, balance) printing.

Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023

And a deposit of 2000 on 13-01-2023

And a withdrawal of 500 on 14-01-2023

When they print a bank statement they should see:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
