import Bank from "./Bank.js"

let manager = Bank.createManager();

let customers1 = manager.addCustomer("Customer 1", "1234", "4321")
let customers2 = manager.addCustomer("Customer 2", "6789", "9876")

Bank.customers.push(customers1)
Bank.customers.push(customers2)

let deposited = customers1.deposite(100)

console.log(customers1);


// EXERSICE 1


// CREATE SMALL BANK APPLICTION USING OOPS
// YOU SHOULD HAVE USER IS MANAGER, USER IS CUSTOMER
// BANK HAS ACCOUNTS

//FEATURE CREATE ACCOUNT -> MANAGER
//FEATURE DEPOSITE, WITHDRAWL -> USER
