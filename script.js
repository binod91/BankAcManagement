// making a class for BankAccount
class BankAccount{
    constructor(){
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance is $${this.balance}.`;
        }else{
            return "Deposit amount must be greater than zero.";
        } 
    }  
        
        withdraw(amount){
            if(amount > 0 && amount <= this.balance){
                this.balance -= amount;
                return `Successfully withdrew $${amount}. New balance is $${this.balance}.`;    
            }else{
                return "Insufficient balance or invalid amount."
            }
        }

        checkBalance(){
            return `Current balance is $${this.balance}.`; 
         };

         
         listAllDeposits(){
            return `Deposits: amounts - ${this.transactions.filter(t => t.type === 'deposit').map(t => t.amount).join(', ')}`;
         }

            listAllWithdrawals(){
                return `Withdrawals: amounts - ${this.transactions.filter(t => t.type === 'withdrawal').map(t => t.amount).join(', ')}`;
            }



        

    }
}

// creaiting an instance of BankAccount
const myAccount = new BankAccount();

// Example usage:
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(50));
console.log(myAccount.checkBalance());
console.log(myAccount.deposit(200));
console.log(myAccount.withdraw(30));
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());




