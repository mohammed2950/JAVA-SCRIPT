import Customer from "./Customer.js";
import User from "./User.js";

class Manager extends User {
    constructor(id, pass) {
        super(id, pass);
    }

    addCustomer(name, id, pass) {
        return new Customer(name, id, pass)
    }

    removeCustomer() {

    }
}

export default Manager
