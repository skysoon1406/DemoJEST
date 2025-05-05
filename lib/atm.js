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
        if (amount > 0 && amount <= this.currentBalance ){
            this.currentBalance = this.currentBalance - amount 
            return amount
        }
        return 0
    }

        
    
    balance() {
        return this.currentBalance
    }
}



// module.exports = ATM;


