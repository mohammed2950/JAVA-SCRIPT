import User from "./User.js";
import Account from "./Account.js";


class Customer extends User {
    name = ""
    accounts = []

    constructor(name, id, pass) {
        super(id, pass);
        this.name = name;
        this.accounts.push(new Account())
    }

    deposite(amount) {
        return this.accounts[0].setBalance(amount);
    }

    withdrawl() {

    }
}

export default Customer
