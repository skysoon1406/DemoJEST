class ATM {
    constructor(currentBalance = 0) {
        this.currentBalance = currentBalance
    }

    deposit(amount){
        if (amount > 0 ){
            this.currentBalance = this.currentBalance + amount 
            // 可以寫成    this.currentBalance += amount 
        }
    }

    balance() {
        return this.currentBalance
    }
}


// export  { ATM } 
module.exports = ATM;


