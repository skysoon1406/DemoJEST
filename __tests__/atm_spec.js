
class ATM {
    constructor(currentBalance = 0) {
        this.currentBalance = currentBalance
    }

    deposit(amount){
        if (amount > 0 ){
            this.currentBalance = this.currentBalance + amount
        }
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

test("不可存0 或小於0 的金額",() => {
    // 3A 原則： Arrange安排  Act行動  Assert評估（預期的結果）

    // Arrange安排 
    const atm = new ATM(10);
    
    // Act行動  = 假設存了 負數金額
    atm.deposit(-5);

    // Assert評估 =  存款金額不變
    expect(atm.balance()).toBe(10);
})