import { ATM } from "../lib/atm.js"
// const ATM =  require("../lib/atm")
// import ATM from '../lib/atm.js';

// 可以用 describe 的把下面的Test全部包起來：
describe("存錢相關功能",() => {
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

})


describe("提款相關功能",() => {
    test("可以提款",() => {
        const atm = new ATM(10);
        const money = atm.withdraw(5);
        expect(atm.balance()).toBe(5);
        expect(money).toBe(5);
        //  不建議這樣寫，因爲 會造成 false positive 的可能性
    })

    test("可以提款2",() => {
        const atm = new ATM(10);
        const money = atm.withdraw(3);
        expect(atm.balance()).toBe(7);
        expect(money).toBe(3);
        //  不建議這樣寫，因爲 會造成 false positive 的可能性
    })

    test("不可提0 或小於0 的金額",() => {
        const atm = new ATM(10);
        const money = atm.withdraw(-3);
        expect(atm.balance()).toBe(10);
        expect(money).toBe(0);
    })

})