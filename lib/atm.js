export  class ATM {
    constructor(currentBalance = 0) {
        this.currentBalance = currentBalance
    }

    deposit(amount){
        if (amount > 0 ){
            this.currentBalance = this.currentBalance + amount 
            // 可以寫成    this.currentBalance += amount 
        }
    }

    withdraw(amount){
        if (amount > 0 &&  this.hasSufficientBalance(amount)  ){
            this.currentBalance = this.currentBalance - amount 
            return amount
        }
        return 0
    }
    
    hasSufficientBalance(amount){
        return amount <= this.currentBalance 
    }
        
    
    balance() {
        return this.currentBalance
    }
}



// module.exports = ATM;


