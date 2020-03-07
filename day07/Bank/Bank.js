import Manager from "./Manager.js"

class Bank {
    static customers = []

    static createManager() {
        return new Manager('1111', '0000')
    }

}
export default Bank
