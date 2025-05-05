
class ATM {
    constructor(currentBalance) {
        this.currentBalance = currentBalance
    }

    deposit(amount){
        this.currentBalance = this.currentBalance + amount
    }

    balance() {
        return this.currentBalance
    }
}


test("可以存錢",() => {
    const atm = new ATM(10);
    atm.deposit(5);
    expect(atm.balance()).toBe(15);
})
// 先寫測試 （規格） ： 宣告 atm = ATM(原來餘額=5) ， atm.deposit(5)以後，預期 atm.balance 是15
