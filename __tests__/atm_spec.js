
class ATM {
    constructor(currentBalance = 0) {
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


test("可以存錢2",() => {
    const atm = new ATM();
    atm.deposit(5);
    expect(atm.balance()).toBe(5);
})
// 測試如果沒有帶餘額 ，測試預設值是否生效