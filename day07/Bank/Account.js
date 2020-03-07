class Account {
    number = ""
    balance = 0

    constructor() {
        let d = new Date();
        this.number = d.getTime()
    }

    getAccountNumber = () => this.number;
    getBalance = () => this.balance;
    setBalance = amount => {
        if (!(amount < 0 || amount > 100000)) {
            this.balance += amount;
            return true
        }
        return false
    }


}

export default Account

