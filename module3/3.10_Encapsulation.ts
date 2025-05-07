//Encapsulation

class BankAccount {
    // public: সবার জন্য উন্মুক্ত
    public readonly id: number;
    public name: string;
    private _balance: number; // private: কেবল এই class এর মধ্যেই access করা যাবে
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
  
    // Setter method: controlled way to update balance
    public deposit(amount: number): void {
      if (amount > 0) {
        this._balance += amount;
      } else {
        console.log("Invalid deposit amount");
      }
    }
  
    // Getter method: controlled way to read balance
    public getBalance(): number {
      return this._balance;
    }
  }
  
  const myAccount = new BankAccount(1, "Mr. X", 1000);
  
  // Accessing via methods (not directly)
  myAccount.deposit(500); // ✅ Allowed
  console.log(myAccount.getBalance()); // ✅ Output: 1500
  
  // myAccount._balance = 10000; ❌ Error: Property '_balance' is private
  